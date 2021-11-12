import React, { useState } from "react";
import Styles from "./forgotpassword.module.scss";

function ResetPassword() {
  return (
    <div className={Styles.resetPassword}>
      <h2>Reset Your Password?</h2>
      <p>Enter the new password below.</p>
      <div>
        <label htmlFor="">New password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div>
        <label htmlFor="">Confirm New password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className={Styles.submitButton}>
        <button>Reset</button>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [submitted, isSubmitted] = useState(false);

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
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className={Styles.submitButton}>
            <button onClick={() => isSubmitted(true)}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
