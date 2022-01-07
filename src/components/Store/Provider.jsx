import React from "react";
import {
  Context,
  ProductsContext,
  StoreContext,
  UsersContext,
} from "./Context";
import useStorage from "utils/useStorage";
import { useState } from "react";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  const [allUsers, setAllusers] = useStorage("allUsers");
  const [allProducts, setAllProducts] = useStorage("allProducts");

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
      }}
    >
      <UsersContext.Provider
        value={{
          allUsers,
          setAllusers,
        }}
      >
        <StoreContext.Provider
          value={{
            token,
            setToken,
          }}
        >
          {children}
        </StoreContext.Provider>
      </UsersContext.Provider>
    </ProductsContext.Provider>
  );
};

export default StoreProvider;
