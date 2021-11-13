import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { JobPostContext } from "../../Context/jobPost.context";
import Styles from "./postJob.module.scss";

function PostJob() {
  const { createJob } = useContext(JobPostContext);
  const history = useHistory();
  const [titleValue, setTitleValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isError, setIsError] = useState(false);

  const createNewJobPost = async () => {
    if (!titleValue || !locationValue || !descriptionValue)
      return setIsError(true);

    const { error, success } = await createJob(
      titleValue,
      descriptionValue,
      locationValue
    );
    if (error) return setIsError(true);
    if (success) history.push("/myjobs");
  };
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
            value={titleValue}
            onChange={(e) => setTitleValue(e?.target?.value)}
            style={isError ? { border: "1px solid red" } : {}}
            onFocus={() => setIsError(false)}
          />
        </div>
        <div>
          <label htmlFor="descriptionID">Description*</label>
          <textarea
            required
            type="text"
            id="descriptionID"
            placeholder="Enter job description"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e?.target?.value)}
            style={isError ? { border: "1px solid red" } : {}}
            onFocus={() => setIsError(false)}
          />
        </div>
        <div>
          <label htmlFor="locationID">Location*</label>
          <input
            required
            type="text"
            id="locationID"
            placeholder="Enter location"
            value={locationValue}
            onChange={(e) => setLocationValue(e?.target?.value)}
            style={isError ? { border: "1px solid red" } : {}}
            onFocus={() => setIsError(false)}
          />
          <span
            className={Styles.errorMessage}
            style={isError ? {} : { display: "none" }}
          >
            All fields are mandatory.
          </span>
        </div>
        <div>
          <button onClick={createNewJobPost}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
