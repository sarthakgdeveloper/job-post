import React from "react";
import { Link } from "react-router-dom";
import Styles from "./signup.module.scss";

function SignUp() {
  return (
    <div className={Styles.signUpContainer}>
      <form action="">
        <div className={Styles.signup}>
          <h2>signup</h2>
          <div className={Styles.signupselectContainer}>
            <span>I am a*</span>
            <div>
              <button className={Styles.selected}>Recruiter</button>
              <button>Candidate</button>
            </div>
          </div>
          <div className={Styles.signupNameContainer}>
            <label htmlFor="fullName">Full Name*</label>
            <input type="text" id="fullName" required />
          </div>
          <div className={Styles.signupInputContainer}>
            <label htmlFor="emailID">Email address</label>
            <input type="email" id="emailID" required />
          </div>
          <div className={Styles.signupPasswordContainer}>
            <div>
              <label htmlFor="createPasswordID">Create Password*</label>
              <input type="password" id="createPasswordID" required />
            </div>
            <div>
              <label htmlFor="confirmPasswordID">Confirm Password*</label>
              <input type="password" id="confirmPasswordID" required />
            </div>
          </div>
          <div className={Styles.skillsContainer}>
            <label htmlFor="skillsID">Skills</label>
            <input type="text" id="skillsID" required />
          </div>
          <div className={Styles.signupButton}>
            <button type="submit">Signup</button>
          </div>
          <div className={Styles.toLoginLink}>
            <span>
              Have a account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
