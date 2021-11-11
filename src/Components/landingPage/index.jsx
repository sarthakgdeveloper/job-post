import React from "react";
import Companies from "../Containers/Companies";
import GetStarted from "../Containers/getStarted";
import WhyUs from "../Containers/whyUs";
import Styles from "./landingPage.module.scss";

function LandingPage() {
  return (
    <div className={Styles.landingPageSection}>
      <GetStarted />
      <WhyUs />
      <Companies />
    </div>
  );
}

export default LandingPage;
