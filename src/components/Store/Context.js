import { createContext } from "react";

export const StoreContext = createContext({
  token: null,
  setToken: () => {},
});

export const UsersContext = createContext({
  allUsers: [],
  setAllusers: () => {},
});

export const ProductsContext = createContext({
  allProducts: [],
  setAllProducts: () => {},
});
