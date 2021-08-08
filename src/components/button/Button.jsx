import { Button } from "antd";
import PropTypes from "prop-types";
import "./style.css";

export const HXButton = ({ className = "", ...props }) => {
  const cls = `${className} hx-button`;
  return <Button {...props} className={cls} />;
};

// Setting prop types
HXButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  shape: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.node,
};
