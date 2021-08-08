import { useState, useEffect } from "react";

import { HXImage } from "components";
import SplashImg from "assets/images/splash.png";
import "./style.css";

export const HXSplash = ({ children }) => {
  const [splashTime, setSplashTime] = useState(false);

  useEffect(() => {
    if (!splashTime) {
      setTimeout(() => {
        setSplashTime(true);
      }, 1500);
    }
  }, [splashTime]);

  return (
    <>
      {splashTime ? (
        children
      ) : (
        <div className="hx-splash-wrapper">
          <HXImage src={SplashImg} alt={"Hoax Splash"} />
        </div>
      )}
    </>
  );
};
