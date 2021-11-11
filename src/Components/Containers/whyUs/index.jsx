import React from "react";
import Styles from "./whyUs.module.scss";

function WhyUs() {
  return (
    <div className={Styles.whyUsContainer}>
      <span>Why Us</span>
      <div className={Styles.cardContainer}>
        <div className={Styles.card}>
          <h2>Get More Visibility</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className={Styles.card}>
          <h2>Organize your candidates</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={Styles.card}>
          <h2>Verify their abilities</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
