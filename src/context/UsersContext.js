import axios from "axios";
import { TokenContext } from "context/TokenContext";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const UsersContext = createContext({
  allUsers: [],
  setAllUsers: () => {},
  syncUsers: () => {},
});

export const UsersContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState();
  const { token } = useContext(TokenContext);

  const syncUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAllUsers(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }, [token]);

  useEffect(() => {
    syncUsers();
  }, [syncUsers]);
  return (
    <UsersContext.Provider
      value={{ allUsers, setAllUsers, syncUsers, loading }}
    >
      {children}
    </UsersContext.Provider>
  );
};
