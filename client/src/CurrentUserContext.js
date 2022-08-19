import React, { useState, useEffect } from "react";
export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const contextMessage = "HENGNNGNGNGcontext is successfully set up!!!";
  return (
    <CurrentUserContext.Provider
      value={{
        contextMessage,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
