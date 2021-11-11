import React, { createContext, useEffect, useState } from "react";

export const JobPostContext = createContext();

export default (props) => {
  const [currentUser, getCurrentUser] = useState(undefined);

  return (
    <JobPostContext.Provider value={{ currentUser, getCurrentUser }}>
      {props.children}
    </JobPostContext.Provider>
  );
};
