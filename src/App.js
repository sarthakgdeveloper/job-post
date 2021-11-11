import React, { useContext } from "react";
import JobPostContextProvider, {
  JobPostContext,
} from "./Context/jobPost.context";
import Header from "./Components/header";
import LandingPage from "./Components/landingPage/index.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./Components/logIn";
import SignUp from "./Components/signup";

function App() {
  const { currentUser } = useContext(JobPostContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </div>
  );
}

export default (props) => (
  <JobPostContextProvider>
    <App {...props} />
  </JobPostContextProvider>
);
