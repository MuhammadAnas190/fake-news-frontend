import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";

import { HXSplash } from "components";
import MainView from "view/Main";

import "index.css";

const App = () => {
  return (
    <HXSplash>
      <MainView />
    </HXSplash>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
