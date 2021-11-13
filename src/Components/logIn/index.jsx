import React, { useState, useContext } from "react";
import { JobPostContext } from "../../Context/jobPost.context";
import { useHistory } from "react-router";
import Styles from "./login.module.scss";
import { Link } from "react-router-dom";

function LogIn() {
  const history = useHistory();
  const { handleLoginIn } = useContext(JobPostContext);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUserLoginIn = async () => {
    const { error, success } = await handleLoginIn(emailValue, passwordValue);
    if (error) return setIsError(true);
    if (success) history.push("myjobs");
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.login}>
        <h2>Login</h2>
        <div className={Styles.loginInputContainer}>
          <label htmlFor="emailID">Email address</label>
          <input
            type="text"
            id="emailID"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e?.target?.value)}
            placeholder="Enter your email"
            style={isError ? { border: "1px solid red" } : {}}
            onFocus={() => setIsError(false)}
          />
        </div>
        <div className={Styles.loginPasswordContainer}>
          <div>
            <label htmlFor="passwordID">Password</label>
            <Link to="/forgotpassword">Forgot your password?</Link>
          </div>
          <input
            type="password"
            id="passwordID"
            required
            value={passwordValue}
            onChange={(e) => setPasswordValue(e?.target?.value)}
            placeholder="Enter your password"
            style={isError ? { border: "1px solid red" } : {}}
            onFocus={() => setIsError(false)}
          />
          <span
            className={Styles.errorMessage}
            style={isError ? {} : { display: "none" }}
          >
            Incorrect email address or password.
          </span>
        </div>
        <div className={Styles.loginButton}>
          <button onClick={handleUserLoginIn}>Login</button>
        </div>
        <div className={Styles.toSignUpLink}>
          <span>
            New to MyJobs? <Link to="/signup">Create an account</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
