import { set } from "date-fns";
import React, { useState, useEffect } from "react";
import usePersistedState from "./hooks/usePersistedState";
export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = usePersistedState("currentUser", null);
  const [allArticles, setAllArticles] = useState(null);

  // -------------------------------------------------
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
