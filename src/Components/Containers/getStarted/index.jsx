import React from "react";
import Styles from "./getStarted.module.scss";

function GetStarted() {
  return (
    <div className={Styles.getStartedContainer}>
      <div className={Styles.header}>
        <h2>
          Welcome to My<span>Jobs</span>
        </h2>
        <button>Get Started</button>
      </div>
      <div className={Styles.imageContainer}>
        <img src="https://media.istockphoto.com/photos/african-american-concierge-checking-in-two-smiling-hotel-guests-picture-id1304058498?b=1&k=20&m=1304058498&s=170667a&w=0&h=NWLzholSypx7Dq8tSZseeESB7xqAFFe_3Uh1qmjiR4k=" />
      </div>
    </div>
  );
}

export default GetStarted;
