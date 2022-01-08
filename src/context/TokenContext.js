import React from "react";
import { createContext, useState } from "react";

export const TokenContext = createContext({
  token: null,
  setToken: () => {},
});

export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState([]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
