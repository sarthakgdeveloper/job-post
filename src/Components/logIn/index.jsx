import React from "react";
import Styles from "./login.module.scss";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className={Styles.loginContainer}>
      <form action="">
        <div className={Styles.login}>
          <h2>Login</h2>
          <div className={Styles.loginInputContainer}>
            <label htmlFor="emailID">Email address</label>
            <input type="text" id="emailID" required />
          </div>
          <div className={Styles.loginPasswordContainer}>
            <div>
              <label htmlFor="passwordID">Password</label>
              <Link to="/">Forgot your password?</Link>
            </div>
            <input type="password" id="passwordID" required />
          </div>
          <div className={Styles.loginButton}>
            <button type="submit">Login</button>
          </div>
          <div className={Styles.toSignUpLink}>
            <span>
              New to MyJobs? <Link to="/signup">Create an account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
