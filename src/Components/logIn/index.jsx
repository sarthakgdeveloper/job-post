import React, { useState } from "react";
import { useHistory } from "react-router";
import Styles from "./login.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function LogIn() {
  const history = useHistory();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleLoginIn = async (e) => {
    e.preventDefault();
    if (!emailValue || !passwordValue) return;
    axios.interceptors.response.use((res) => console.log(res));
    const data = await axios({
      method: "POST",
      url: `https://jobs-api.squareboat.info/api/v1/auth/login`,
      data: {
        mode: "raw",
        raw: `{\n\t\"email\": \"${emailValue}\",\n\t\"password\": \"${passwordValue}\"\n}`,
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
    <div className={Styles.loginContainer}>
      <form action="" onSubmit={handleLoginIn}>
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
            />
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
