import React from "react";
import { createContext, useState } from "react";
import P from 'prop-types';

export const TokenContext = createContext({
  token: null,
  setToken: () => {},
});

export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
TokenContextProvider.P = {
    children: P.node,
};