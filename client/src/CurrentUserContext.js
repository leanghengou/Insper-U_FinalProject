import { set } from "date-fns";
import React, { useState, useEffect } from "react";
export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const initialUserValue = {
    email: null,
    password: null,
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [allArticles, setAllArticles] = useState(null);
  useEffect(() => {
    fetch("/api/all-articles")
      .then((res) => res.json())
      .then((data) => setAllArticles(data.data));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        allArticles,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
