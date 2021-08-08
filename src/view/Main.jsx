import { Layout, Row, Col, Typography } from "antd";

import { HXImage } from "components/index";

import Logo from "assets/images/logo.png";
import FakeNews from "assets/images/fake-news.jpg";

import "view/main.css";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

/**
 * @author MuhammadAnas190
 * We will be setting a basic layout for the web.
 * Also we should be calling our actions from here
 * and pass down the values through props (single responsibility)
 *
 * @todo make sure to not use "style" attribute. Create classes which should be inherited from parent class
 * .main-view
 */
const MainView = (props) => {
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
