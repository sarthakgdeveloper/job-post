import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const JobPostContext = createContext();

export default (props) => {
  const base_url = "https://jobs-api.squareboat.info/api/v1";

  const [currentUser, getCurrentUser] = useState(undefined);
  const [emailVerifyToken, getEmailVerifyToken] = useState(undefined);
  const [jobs, getJobs] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);

  const handleLoginIn = async (email, password) => {
    if (!email || !password) return;
    try {
      const data = await axios({
        method: "POST",
        url: `${base_url}/auth/login`,
        data: {
          email,
          password,
        },
      });
      if (data?.data?.success) {
        getCurrentUser({ ...data.data?.data });
        return { success: true, error: false };
      }
    } catch (e) {
      return { success: false, error: true };
    }
  };

  const handleSignUp = async (
    email,
    password,
    confirmPassword,
    name,
    skills
  ) => {
    if (!email || !password || !confirmPassword || !name) return;
    try {
      const data = await axios({
        method: "POST",
        url: `${base_url}/auth/register`,
        data: {
          email,
          password,
          confirmPassword,
          name,
          skills,
          userRole: 0,
        },
      });
      if (data?.data?.success) {
        getCurrentUser({ ...data.data?.data });
        return { success: true, error: false };
      }
    } catch (e) {
      return { success: false, error: true };
    }
  };

  const handleVerifyEmail = async (email) => {
    if (!email) return;
    try {
      const data = await axios({
        method: "GET",
        url: `${base_url}/auth/resetpassword?email=${email}`,
      });
      getEmailVerifyToken(data?.data?.data?.token);
      return { success: true, error: false };
    } catch (e) {
      return { success: false, error: true };
    }
  };

  const handleResetPassword = async (password, confirmPassword) => {
    if (!password || !confirmPassword) return;
    try {
      const verifyToken = await axios({
        method: "GET",
        url: `${base_url}/auth/resetpassword/${emailVerifyToken}`,
      });
      if (!verifyToken?.data?.success) {
        getEmailVerifyToken(undefined);
        return {
          success: verifyToken?.data?.success,
          error: verifyToken?.data?.message,
        };
      }
      const data = await axios({
        method: "POST",
        url: `${base_url}/auth/resetpassword`,
        data: {
          password,
          confirmPassword,
          token: emailVerifyToken,
        },
      });
      if (data?.data?.success) {
        return { success: true, error: false };
      }
      getEmailVerifyToken(undefined);
    } catch (e) {
      return {
        success: false,
        error: true,
      };
    }
  };

  const getPostedJobs = async (page = 1) => {
    if (!currentUser) return;
    const data = await axios({
      method: "GET",
      url: `${base_url}/recruiters/jobs?page=${page}`,
      headers: {
        Authorization: currentUser?.token,
      },
    });
    if (data?.data?.success) {
      getJobs(data?.data?.data ? [...data?.data?.data?.data] : []);
      return { success: true, error: false };
    }
    return { success: false, error: data?.data?.message };
  };

  const getJobApplications = async (id) => {
    if (!currentUser || !id) return;

    const data = await axios({
      method: "GET",
      url: `${base_url}/recruiters/jobs/${id}/candidates`,
      headers: {
        Authorization: currentUser?.token,
      },
    });

    if (data?.data?.success) {
      setJobApplications(data?.data?.data ? data?.data?.data : []);
      return { success: true, error: false };
    }
    return { success: false, error: data?.data?.message };
  };

  const createJob = async (title, description, location) => {
    if (!title || !description || !location) return;

    const data = await axios({
      method: "POST",
      url: `${base_url}/jobs`,
      data: {
        title,
        description,
        location,
      },
      headers: {
        Authorization: currentUser?.token,
      },
    });
    if (data.data.success) {
      await getPostedJobs();
      return { success: true, error: false };
    }
    return { success: false, error: data?.data?.message };
  };

  return (
    <JobPostContext.Provider
      value={{
        currentUser,
        jobs,
        jobApplications,
        handleLoginIn,
        handleSignUp,
        handleVerifyEmail,
        handleResetPassword,
        getCurrentUser,
        getPostedJobs,
        getJobApplications,
        createJob,
      }}
    >
      {props.children}
    </JobPostContext.Provider>
  );
};
