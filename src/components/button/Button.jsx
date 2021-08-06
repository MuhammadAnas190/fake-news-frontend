import { Button } from "antd";
import "./style.css";

export const HXButton = ({ className = "", ...props }) => {
  const cls = `${className} hx-button`;
  return <Button {...props} className={cls} />;
};
