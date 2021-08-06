import { Input } from "antd";
import "./style.css";

const { TextArea } = Input;

export const HXTextArea = ({ className = "", ...props }) => {
  const cls = `${className} hx-textarea`;
  return <TextArea {...props} className={cls} />;
};
