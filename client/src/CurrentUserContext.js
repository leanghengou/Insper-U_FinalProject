import { set } from "date-fns";
import React, { useState, useEffect } from "react";
import usePersistedState from "./hooks/usePersistedState";
export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = usePersistedState("currentUser", null);
  const [allArticles, setAllArticles] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const categoriesLength = allCategories && allCategories.length;
  const [changeIndex, setChangeIndex] = useState();
  useEffect(() => {
    setChangeIndex(Math.floor(Math.random() * categoriesLength));
  }, []);

  // -------------------------------------------------
  useEffect(() => {
    fetch("/api/all-articles")
      .then((res) => res.json())
      .then((data) => setAllArticles(data.data));
  }, []);

  useEffect(() => {
    fetch(`/api/categories`)
      .then((res) => res.json())
      .then((data) => setAllCategories(data.data));
  }, []);
  let randomCategory = allCategories && allCategories[changeIndex];

  return (
    <CurrentUserContext.Provider
      value={{
        allArticles,
        currentUser,
        setCurrentUser,
        allCategories,
        randomCategory,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
