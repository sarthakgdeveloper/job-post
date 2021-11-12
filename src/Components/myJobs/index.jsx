import React, { useState } from "react";
import { useHistory } from "react-router";
import Styles from "./myJobs.module.scss";
import JobApplications from "../jobApplications";
import AddJob from "../../img/AddJob.png";

function MyJobs() {
  const history = useHistory();
  const [openApplication, setOpenApplication] = useState(false);
  return (
    <div className={Styles.myJobsContainer}>
      <div className={Styles.myJobs}>
        <div className={Styles.dashboardInfo}>
          <span>Home</span>
        </div>
        <div className={Styles.myJobsHeader}>
          <h2>Jobs posted by you</h2>
        </div>
        {true ? (
          <div className={Styles.postedJobsContainer}>
            {[1, 2, 3, 4].map((e, index) => (
              <div key={index} className={Styles.jobPost}>
                <span>Front-end Designer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun orem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididun
                </p>
                <div>
                  <span>Gurgaon</span>
                  <button onClick={() => setOpenApplication(true)}>
                    View Applications
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={Styles.noJobPostContainer}>
            <div>
              <img src={AddJob} alt="" />
            </div>
            <span>Your posted jobs will show here!</span>
            <button onClick={() => history.push("/myjobs/postjob")}>
              Post a Job
            </button>
          </div>
        )}
      </div>
      {openApplication && (
        <JobApplications
          setOpenApplication={setOpenApplication}
          jobData={[1, 2, 3]}
        />
      )}
    </div>
  );
}

export default MyJobs;
