import { useState } from "react";
import { Layout, Row, Col, Typography, message } from "antd";
import { HXImage, HXButton, HXTextArea } from "components/index";
import { fetchNewsResult } from "utils";
import Logo from "assets/images/logo.png";
import FakeNews from "assets/images/fake-news.jpg";

import "view/main.css";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

/**
 * We will be setting a basic layout for the web.
 * Also we should be calling our actions from here
 * and pass down the values through props (single responsibility)
 *
 * @todo make sure to not use "style" attribute. Create classes which should be inherited from parent class
 * .main-view
 */

const MainView = (props) => {
  const [newsText, setnewsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setresult] = useState("");

  const OnChangeHXTextArea = (e) => {
    setnewsText(e.target.value);
  };
  const onClickSubmit = async () => {
    // removing links and special symbols from th news text
    let temp = newsText.toLowerCase();
    temp = temp.replace(/[\\W]/gm, " ");
    temp = temp.replace(/(\r\n|\n|\r)/gm, " ").trim();
    temp = temp.replace(/[â€™]/g, "");
    temp = temp.replace(/[â€œ]/g, "");
    temp = temp.replace(/[]/g, "");

    setnewsText(temp);
    if (newsText) {
      message.loading("Calculating news");
      setLoading(true);
      const response = await fetchNewsResult(newsText);
      setLoading(false);
      setresult(response);
    }
  };
  return (
    <Layout className="main-view">
      <Header>
        <Row justify="center" align="middle" className="hx-header-row">
          <Col>
            <HXImage src={Logo} alt="The Hoax" width={280} />
          </Col>
        </Row>
      </Header>
      <Content className="hx-content">
        <Row justify="center">
          <Col xs={24} lg={20}>
            {/* Here we will be applying using the components */}
            <Row gutter={10} justify="space-between">
              <Col xs={24} lg={12}>
                <Title>Fake News Detector</Title>
                <Text>
                  Ever thought how we can find the fake articles/news that do
                  get spread in the world of internet very easily? Now thanks to
                  the AI we can easily find the fake news and tell you which one
                  is the correct article. We are using Tensorflow model through
                  which we will be finding out the fake news.
                </Text>
                <Row align="middle" justify="end">
                  <Col span={24}>
                    <HXTextArea
                      placeholder="It's time to find the actual news! Enter now..."
                      onChange={OnChangeHXTextArea}
                      rows={11}
                      maxLength={3500}
                    />
                  </Col>
                  <Col span={6}>
                    <HXButton
                      className="hx-button-analyze"
                      block
                      size="large"
                      onClick={onClickSubmit}
                    >
                      Analyze
                    </HXButton>
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row justify="center">
                  <Col>
                    <HXImage src={FakeNews} alt="Fake News" loading={loading} />
                  </Col>
                </Row>
                <Row gutter={20} justify="center" align="middle">
                  <Col>
                    {result.prediction === "Real" ? (
                      <Text className="result-real">Its Real</Text>
                    ) : result.prediction === "Fake" ? (
                      <Text className="result-fake">Its Fake</Text>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainView;
