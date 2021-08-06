import { Layout } from "antd";
import { HXButton } from "components/index";
import "view/main.css";

const { Header, Content } = Layout;

/**
 * @author MuhammadAnas190
 * We will be setting a basic layout for the web.
 * Also we should be calling our actions from here
 * and pass down the values through props (single responsibility)
 *
 * @todo make sure to not use "style" attribute. Create classes which should be inherited from parent class
 */
export const MainView = (props) => {
  return (
    <Layout className="main-view">
      <Header>{/* Here we will be applying the navigation and logo */}</Header>
      <Content>
        {/* Here we will be applying using the components */}

        <HXButton>This is an antd button</HXButton>
      </Content>
    </Layout>
  );
};
