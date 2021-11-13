import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { JobPostContext } from "../../Context/jobPost.context";
import { Link } from "react-router-dom";
import Styles from "./signup.module.scss";

function SignUp() {
  const { handleSignUp } = useContext(JobPostContext);
  const history = useHistory();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [cPasswordValue, setCPasswordValue] = useState("");
  const [skillsValue, setSkillsValue] = useState("");

  const [isError, setIsError] = useState(undefined);

  const handleUserSignUp = async () => {
    if (!emailValue || !passwordValue || !cPasswordValue || !nameValue)
      return setIsError({ type: "all", message: "The field is mandatory." });
    if (passwordValue !== cPasswordValue)
      return setIsError({
        type: "password",
        message: "Password and confirm password does not match",
      });
    const { error, success } = await handleSignUp(
      emailValue,
      passwordValue,
      cPasswordValue,
      nameValue,
      skillsValue
    );
    if (error)
      return setIsError({ type: "email", message: "please check your email" });
    if (success) history.push("/myjobs");
  };
  return (
    <div className={Styles.signUpContainer}>
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
          <input
            type="text"
            id="fullName"
            required
            value={nameValue}
            onChange={(e) => setNameValue(e?.target?.value)}
            placeholder="Enter your full name"
            onFocus={() => setIsError(undefined)}
            style={
              isError && isError.type === "all"
                ? { border: "1px solid red" }
                : {}
            }
          />
          {isError && isError.type === "all" && <span>{isError.message}</span>}
        </div>
        <div className={Styles.signupInputContainer}>
          <label htmlFor="emailID">Email address*</label>
          <input
            type="email"
            id="emailID"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e?.target?.value)}
            placeholder="Enter your email"
            onFocus={() => setIsError(undefined)}
            style={
              isError && (isError.type === "all" || isError.type === "email")
                ? { border: "1px solid red" }
                : {}
            }
          />
          {isError && (isError.type === "all" || isError.type === "email") && (
            <span>{isError.message}</span>
          )}
        </div>
        <div className={Styles.signupPasswordContainer}>
          <div>
            <label htmlFor="createPasswordID">Create Password*</label>
            <input
              onFocus={() => setIsError(undefined)}
              type="password"
              id="createPasswordID"
              required
              value={passwordValue}
              onChange={(e) => setPasswordValue(e?.target?.value)}
              placeholder="Enter your password"
              style={
                isError &&
                (isError.type === "all" || isError.type === "password")
                  ? { border: "1px solid red" }
                  : {}
              }
            />
            {isError &&
              (isError.type === "all" || isError.type === "password") && (
                <span>{isError.message}</span>
              )}
          </div>
          <div>
            <label htmlFor="confirmPasswordID">Confirm Password*</label>
            <input
              type="password"
              onFocus={() => setIsError(undefined)}
              id="confirmPasswordID"
              required
              value={cPasswordValue}
              style={
                isError &&
                (isError.type === "all" || isError.type === "password")
                  ? { border: "1px solid red" }
                  : {}
              }
              onChange={(e) => setCPasswordValue(e?.target?.value)}
              placeholder="Enter your password"
            />
            {isError &&
              (isError.type === "all" || isError.type === "password") && (
                <span>{isError.message}</span>
              )}
          </div>
        </div>
        <div className={Styles.skillsContainer}>
          <label htmlFor="skillsID">Skills</label>
          <input
            type="text"
            id="skillsID"
            required
            value={skillsValue}
            onChange={(e) => setSkillsValue(e?.target?.value)}
            placeholder="Enter comma separated skills"
          />
        </div>
        <div className={Styles.signupButton}>
          <button onClick={handleUserSignUp}>Signup</button>
        </div>
        <div className={Styles.toLoginLink}>
          <span>
            Have a account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
