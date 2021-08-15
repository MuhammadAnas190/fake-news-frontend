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
 * @authors
 * MuhammadAnas190
 * Subhan Ahmed
 * We will be setting a basic layout for the web.
 * Also we should be calling our actions from here
 * and pass down the values through props (single responsibility)
 *
 * @todo make sure to not use "style" attribute. Create classes which should be inherited from parent class
 * .main-view
 */
const MainView = (props) => {
  const [newsText, setnewsText] = useState("");
  const [result, setresult] = useState("");

  const OnChangeHXTextArea = (e) => {
    setnewsText(e.target.value);
    console.log(newsText);
  };
  const onClickSubmit = async () => {
    // removing links and special symbols from th news text
    let temp = newsText.toLowerCase();
    // temp = temp.replace("/[https?://S+|www.S+]/g", "");
    temp = temp.replace(/[\\W]/gm, " ");
    // temp = temp.replace("/[\n]/g", "");
    // temp = temp.replace(/[+]/g, " ");
    // temp = temp.replace(/[^]/g, "");
    // temp = temp.replace(/[$]/g, "");
    // temp =temp.replace(/[^\x20-\x7E]/gmi, "")
    temp = temp.replace(/(\r\n|\n|\r)/gm, " ").trim();
    temp = temp.replace(/[â€™]/g, "");
    temp = temp.replace(/[â€œ]/g, "");
    temp = temp.replace(/[]/g, "");
    // temp = temp.replace(/[^a-zA-Z0-9]/g, '');

    console.log(temp);
    setnewsText(temp);
    if (newsText) {
      message.loading("Calculating news");
      const tempr = await fetchNewsResult(newsText);
      setresult(tempr);
      console.log(result);
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
              <Col lg={12}>
                <Title>Fake News Detector</Title>
                <Text>
                  Ever thought how we can find the fake articles/news that do
                  get spread in the world of internet very easily? Now thanks to
                  the AI we can easily find the fake news and tell you which one
                  is the correct article. We are using Tensorflow model through
                  which we will be finding out the fake news.
                </Text>
                <Row>
                  <HXTextArea
                    placeholder="News here"
                    onChange={OnChangeHXTextArea}
                    size="large"
                    style={{ height: "150px" }}
                  />
                </Row>
                <HXButton
                  onClick={onClickSubmit}
                  style={{ float: "right", marginTop: "10px" }}
                >
                  Analyze
                </HXButton>
                <Row>
                  <Col>
                    {result.prediction === "Real" ? (
                      <p style={{ color: "green", marginTop: "10px" }}>
                        Its Real
                      </p>
                    ) : null}
                    {result.prediction === "Fake" ? (
                      <p style={{ color: "red", marginTop: "10px" }}>
                        Its Fake
                      </p>
                    ) : null}
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
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
