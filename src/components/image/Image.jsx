import PropTypes from "prop-types";
import { Image } from "antd";

export const HXImage = (props) => <Image {...props} />;

HXImage.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  preview: PropTypes.bool,
};

HXImage.defaultProps = {
  preview: false,
};
