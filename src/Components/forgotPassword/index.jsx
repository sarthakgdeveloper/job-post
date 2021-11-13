import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { JobPostContext } from "../../Context/jobPost.context";
import Styles from "./forgotpassword.module.scss";

function ResetPassword() {
  const { handleResetPassword } = useContext(JobPostContext);

  const history = useHistory();

  const [passwordValue, setPasswordValue] = useState("");
  const [cPasswordValue, setCPasswordValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUserResetPassword = async () => {
    if (!passwordValue || !cPasswordValue || passwordValue !== cPasswordValue)
      return setIsError(true);

    const { error, success } = await handleResetPassword(
      passwordValue,
      cPasswordValue
    );
    if (error) return setIsError(true);
    if (success) history.push("/login");
  };

  return (
    <div className={Styles.resetPassword}>
      <h2>Reset Your Password?</h2>
      <p>Enter the new password below.</p>
      <div>
        <label htmlFor="">New password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e?.target?.value)}
          onFocus={() => setIsError(false)}
          style={isError ? { border: "1px solid red" } : {}}
        />
        <span
          className={Styles.errorMessage}
          style={isError ? {} : { display: "none" }}
        >
          Passwords do not match or already is in use.
        </span>
      </div>
      <div>
        <label htmlFor="">Confirm New password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={cPasswordValue}
          onChange={(e) => setCPasswordValue(e?.target?.value)}
          onFocus={() => setIsError(false)}
          style={isError ? { border: "1px solid red" } : {}}
        />
        <span
          className={Styles.errorMessage}
          style={isError ? {} : { display: "none" }}
        >
          Passwords do not match or already is in use.
        </span>
      </div>
      <div className={Styles.submitButton}>
        <button onClick={handleUserResetPassword}>Reset</button>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [submitted, isSubmitted] = useState(false);

  const { handleVerifyEmail } = useContext(JobPostContext);

  const [emailValue, setEmailValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUserVerifyEmail = async () => {
    const { error, success } = await handleVerifyEmail(emailValue);
    if (error) return setIsError(true);
    if (success) return isSubmitted(true);
  };

  return (
    <div className={Styles.forgotPasswordContainer}>
      {submitted ? (
        <ResetPassword />
      ) : (
        <div className={Styles.forgotPassword}>
          <h2>Forgot your password?</h2>
          <p>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <div>
            <label htmlFor="">Email address</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={emailValue}
              onChange={(e) => setEmailValue(e?.target?.value)}
              onFocus={() => setIsError(false)}
              style={isError ? { border: "1px solid red" } : {}}
            />
            <span
              className={Styles.errorMessage}
              style={isError ? {} : { display: "none" }}
            >
              Please check your email.
            </span>
          </div>
          <div className={Styles.submitButton}>
            <button onClick={handleUserVerifyEmail}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
