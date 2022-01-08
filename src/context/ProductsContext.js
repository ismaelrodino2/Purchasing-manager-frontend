import axios from "axios";
import { TokenContext } from "context/TokenContext";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const ProductsContext = createContext({
  allProducts: [],
  setAllProducts: () => {},
  syncProducts: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { token } = useContext(TokenContext);

  const syncProducts = useCallback(async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:3333/products",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAllProducts(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }, [token]);

  useEffect(() => {
    syncProducts();
  }, [syncProducts]);
  return (
    <ProductsContext.Provider
      value={{ allProducts, setAllProducts, syncProducts, loading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
