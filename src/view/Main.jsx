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

  const onClickSubmit = async () => {
    if (newsText) {
      // removing links and special symbols from th news text
      // Allowing only white listed text from newsText.
      const filteredNewsText = newsText.replace(/[^a-zA-Z0-9 ]/g, "");

      message.loading("Calculating news...");
      setLoading(true);
      setresult("");
      try {
        const response = await fetchNewsResult(filteredNewsText);
        setresult(response.prediction.toLowerCase());
        message.success("Woohoo your news is now calculated!");
      } catch (e) {
        message.error("Looks like something went wrong!");
      }
      setLoading(false);
    } else {
      message.error("Enter news first!");
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
                      onChange={(e) => setnewsText(e.target.value)}
                      rows={11}
                      maxLength={3500}
                    />
                  </Col>
                  <Col xs={12} lg={6}>
                    <HXButton
                      className="hx-button-analyze"
                      block
                      size="large"
                      onClick={onClickSubmit}
                      loading={loading}
                    >
                      Analyze
                    </HXButton>
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row gutter={20} justify="center" align="middle">
                  <Col>
                    {result.includes("real") ? (
                      <Title level={4} className="result-real">
                        Its Real
                      </Title>
                    ) : result.includes("fake") ? (
                      <Title level={4} className="result-fake">
                        Its Fake
                      </Title>
                    ) : null}
                  </Col>
                </Row>
                <Row justify="center">
                  <Col>
                    <HXImage src={FakeNews} alt="Fake News" />
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
