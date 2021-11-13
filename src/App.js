import React, { useContext } from "react";
import JobPostContextProvider, {
  JobPostContext,
} from "./Context/jobPost.context";
import Header from "./Components/header";
import LandingPage from "./Components/landingPage/index.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LogIn from "./Components/logIn";
import SignUp from "./Components/signup";
import ForgotPassword from "./Components/forgotPassword";
import MyJobs from "./Components/myJobs";
import PostJob from "./Components/postJob";

function App() {
  const { currentUser } = useContext(JobPostContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route
          path="/myjobs"
          exact
          render={() => (currentUser ? <MyJobs /> : <Redirect to="/" />)}
        />
        <Route
          path="/myjobs/postjob"
          exact
          render={() => (currentUser ? <PostJob /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}

export default (props) => (
  <JobPostContextProvider>
    <App {...props} />
  </JobPostContextProvider>
);
