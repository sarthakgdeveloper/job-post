import React from "react";
import Styles from "./jobApplications.module.scss";

function JobApplications({ setOpenApplication, jobData }) {
  return (
    <div className={Styles.jobApplicationsContainer}>
      <div className={Styles.jobApplications}>
        <div className={Styles.applicationControllers}>
          <span>Applications for this job</span>
          <button onClick={() => setOpenApplication(false)}>X</button>
        </div>
        <p>{jobData.length > 0 ? `Total ${jobData.length}` : 0} applications</p>
        <div className={Styles.allJobApplications}>
          {jobData?.length > 0 ? (
            jobData?.map((eCard, index) => (
              <div className={Styles.eachJobApplication} key={index}>
                <div className={Styles.candidateInfoContainer}>
                  <div className={Styles.userImage}>
                    <div></div>
                    <span>S</span>
                  </div>
                  <div className={Styles.candidateInfo}>
                    <span>Sarthak Gupta</span>
                    <span>sarthakg2,29@gamil.com</span>
                  </div>
                </div>
                <span>skills</span>
                <p>Coding, designing, graphics, website, app ui</p>
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
