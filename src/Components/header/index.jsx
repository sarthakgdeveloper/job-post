import React from "react";
import { useHistory } from "react-router";
import Styles from "./header.module.scss";

function Header() {
  const history = useHistory();
  return (
    <div className={Styles.headerSection}>
      <div className={Styles.headerContainer}>
        <div className={Styles.jobPostTitle}>
          <h4>
            My<span>Jobs</span>
          </h4>
        </div>
        <div className={Styles.controllers}>
          <button onClick={() => history.push("/login")}>Login/Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
