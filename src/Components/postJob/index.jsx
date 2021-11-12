import React from "react";
import Styles from "./postJob.module.scss";

function PostJob() {
  return (
    <div className={Styles.postJobContainer}>
      <div className={Styles.dashboardInfo}>
        <span>{"Home > Post a Job"}</span>
      </div>
      <div className={Styles.postJob}>
        <span>Post a Job</span>
        <div>
          <label htmlFor="jobTitleID">Job Title*</label>
          <input
            required
            type="text"
            id="jobTitleID"
            placeholder="Enter job title"
          />
        </div>
        <div>
          <label htmlFor="descriptionID">Description*</label>
          <textarea
            required
            type="text"
            id="descriptionID"
            placeholder="Enter job description"
          />
        </div>
        <div>
          <label htmlFor="locationID">Location*</label>
          <input
            required
            type="text"
            id="locationID"
            placeholder="Enter location"
          />
        </div>
        <div>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
