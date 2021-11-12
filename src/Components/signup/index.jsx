import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./signup.module.scss";
import axios from "axios";

function SignUp() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [cPasswordValue, setCPasswordValue] = useState("");
  const [skillsValue, setSkillsValue] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!emailValue || !passwordValue) return;
    axios.interceptors.response.use((res) => console.log(res));
    const data = await axios({
      method: "POST",
      url: `https://jobs-api.squareboat.info/api/v1/auth/register`,
      data: {
        mode: "raw",
        raw: `{\n\t\"email\": \"${emailValue}\",\n\t\"userRole\": 0, \n\t\"password\": \"${passwordValue}\",\n\t\"confirmPassword\": \"${cPasswordValue}\",\n\t\"name\": \"${nameValue}\",\n\t\"skills\": \"${skillsValue}\"\n}`,
        options: {
          raw: {
            language: "json",
          },
        },
      },
      transformResponse: [
        (data) => {
          console.log(data);
          return data;
        },
      ],
    });
  };
  return (
    <div className={Styles.signUpContainer}>
      <form onSubmit={handleSignUp}>
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
            />
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
            />
          </div>
          <div className={Styles.signupPasswordContainer}>
            <div>
              <label htmlFor="createPasswordID">Create Password*</label>
              <input
                type="password"
                id="createPasswordID"
                required
                value={passwordValue}
                onChange={(e) => setPasswordValue(e?.target?.value)}
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPasswordID">Confirm Password*</label>
              <input
                type="password"
                id="confirmPasswordID"
                required
                value={cPasswordValue}
                onChange={(e) => setCPasswordValue(e?.target?.value)}
                placeholder="Enter your password"
              />
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
