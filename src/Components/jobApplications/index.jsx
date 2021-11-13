import React, { useContext } from "react";
import { JobPostContext } from "../../Context/jobPost.context";
import Styles from "./jobApplications.module.scss";

function JobApplications({ setOpenApplication }) {
  const { jobApplications } = useContext(JobPostContext);
  return (
    <div className={Styles.jobApplicationsContainer}>
      <div className={Styles.jobApplications}>
        <div className={Styles.applicationControllers}>
          <span>Applications for this job</span>
          <button onClick={() => setOpenApplication(false)}>X</button>
        </div>
        <p>
          {jobApplications.length > 0 ? `Total ${jobApplications.length}` : 0}{" "}
          applications
        </p>
        <div className={Styles.allJobApplications}>
          {jobApplications?.length > 0 ? (
            jobApplications?.map((eCard, index) => (
              <div className={Styles.eachJobApplication} key={index}>
                <div className={Styles.candidateInfoContainer}>
                  <div className={Styles.userImage}>
                    <div></div>
                    <span>{eCard?.name[0]}</span>
                  </div>
                  <div className={Styles.candidateInfo}>
                    <span>{eCard?.name}</span>
                    <span>{eCard?.email}</span>
                  </div>
                </div>
                <span>skills</span>
                <p>{eCard?.skills}</p>
              </div>
            ))
          ) : (
            <div className={Styles.noJobApplication}>
              <span>No applications available!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobApplications;
