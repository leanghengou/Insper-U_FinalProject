import { set } from "date-fns";
import React, { useState, useEffect } from "react";
export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const contextMessage = "HENGNNGNGNGcontext is successfully set up!!!";
  const [allArticles, setAllArticles] = useState(null);
  useEffect(() => {
    fetch("/api/all-articles")
      .then((res) => res.json())
      .then((data) => setAllArticles(data.data));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        contextMessage,
        allArticles,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
