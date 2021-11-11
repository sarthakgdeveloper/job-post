import React from "react";
import Styles from "./companies.module.scss";

function Companies() {
  const companiesArr = [
    "Solaytic",
    "Kanba",
    "LightAI",
    "ztos",
    "Kanba",
    "goldline",
    "ideaa",
    "liva",
    "velocity",
  ];

  return (
    <div className={Styles.companiesContainer}>
      <h2>companies who trust us</h2>
      <div className={Styles.companies}>
        {companiesArr.map((eCompany, index) => (
          <div className={Styles.company} key={index}>
            <h2>{eCompany}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
