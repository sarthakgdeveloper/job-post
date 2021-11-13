import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Styles from "./myJobs.module.scss";
import JobApplications from "../jobApplications";
import AddJob from "../../img/AddJob.png";
import { JobPostContext } from "../../Context/jobPost.context";

function MyJobs() {
  const history = useHistory();
  const { getPostedJobs, jobs, getJobApplications } =
    useContext(JobPostContext);
  const [openApplication, setOpenApplication] = useState(false);

  useEffect(() => {
    getPostedJobs();
  }, []);
  return (
    <div className={Styles.myJobsContainer}>
      <div className={Styles.myJobs}>
        <div className={Styles.dashboardInfo}>
          <span>Home</span>
        </div>
        <div className={Styles.myJobsHeader}>
          <h2>Jobs posted by you</h2>
        </div>
        {jobs.length ? (
          <div className={Styles.postedJobsContainer}>
            {jobs.map((e, index) => (
              <div key={index} className={Styles.jobPost}>
                <span>{e?.title}</span>
                <p>{e?.description}</p>
                <div>
                  <span>{e?.location}</span>
                  <button
                    onClick={async () => {
                      await getJobApplications(e?.id);
                      setOpenApplication(true);
                    }}
                  >
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
