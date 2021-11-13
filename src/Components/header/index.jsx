import React, { useContext, useState } from "react";
import { JobPostContext } from "../../Context/jobPost.context";
import { useHistory } from "react-router";
import Styles from "./header.module.scss";

function Header() {
  const { currentUser, getCurrentUser } = useContext(JobPostContext);
  const [dropdownClicked, isDropdownClicked] = useState(false);
  const history = useHistory();
  return (
    <div className={Styles.headerSection}>
      <div className={Styles.headerContainer}>
        <div className={Styles.jobPostTitle}>
          <h4
            onClick={() =>
              currentUser ? history.push("/myjobs") : history.push("/")
            }
          >
            My<span>Jobs</span>
          </h4>
        </div>
        {currentUser ? (
          <div className={Styles.userControllers}>
            <button onClick={() => history.push("/myjobs/postjob")}>
              Post a Job
            </button>
            <div className={Styles.userInfo}>
              <div className={Styles.userName}>
                <div></div>
                <span>{currentUser.name[0]}</span>
              </div>
              <div className={Styles.dropdownContainer}>
                <i
                  className={Styles.arrowDown}
                  onClick={() => isDropdownClicked(!dropdownClicked)}
                ></i>
                <div
                  className={Styles.dropdown}
                  style={dropdownClicked ? {} : { display: "none" }}
                >
                  <span
                    onClick={() => {
                      getCurrentUser(undefined);
                      isDropdownClicked(false);
                    }}
                  >
                    Logout
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={Styles.controllers}>
            <button onClick={() => history.push("/login")}>Login/Signup</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
