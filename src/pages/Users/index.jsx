import React, { useContext, useEffect } from "react";
import {
  UsersContext,
  StoreContext,
} from "components/Store/Context";
import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import { LoadingDots } from "components/Loading";
import { ProductsContext } from "context/ProductsContext";

const Users = () => {
  const { token } = useContext(StoreContext);

  const userToken = token.replace(/['"]+/g, "");

  const [loading, setLoading] = useState(true);
  const { allUsers, setAllusers } = useContext(UsersContext);
  const { allProducts, setAllProducts } = useContext(ProductsContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:3333/users",
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        setAllusers(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [userToken, setAllusers]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:3333/products",
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        setAllProducts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [userToken, setAllProducts]);

  return (
    <Styled.Container>
      <h1>Lista de usuários</h1>
      {loading && <LoadingDots text="Loading" />}
      <Styled.Grid>
        {!loading &&
          allUsers.map((el) => {
            return (
              <Styled.Wrapper>
                <p>Nome: {el.name}</p>
                <p>E-mail: {el.email}</p>
              </Styled.Wrapper>
            );
          })}
      </Styled.Grid>
    </Styled.Container>
  );
};

export default Users;
