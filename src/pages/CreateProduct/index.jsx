import React, { useCallback, useContext, useEffect } from "react";
import {ProductsContext, StoreContext} from "components/Store/Context";
import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import useStorage from "utils/useStorage";
import { ModalLoading } from "components/ModalLoading";

const CreateProduct = () => {
  const { token } = useContext(StoreContext);
  const userToken = token.replace(/['"]+/g, "");

  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const { allProducts, setAllProducts } = useContext(ProductsContext);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const article = {
        name: e.target.name.value,
        number: e.target.number.value,
        price: e.target.price.value,
      };

      const fetchData = async () => {
        setLoading(true);
        try {
          const { data: response } = await axios.post(
            "http://localhost:3333/products",
            article,
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          );
          setUsers(response);
          window.alert("produto criado com sucesso");
          document.getElementById("form").reset();
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      };

      fetchData();
    },
    [userToken]
  );

  return (
    <Styled.Container>
      {loading && <ModalLoading />}
      <h1>Criar Produto</h1>
      <form onSubmit={onSubmit} id="form">
        <Styled.Wrapper>
          <Styled.InputWraper>
            <label htmlFor="name">Produto:</label>
            <input id="name" type="name" name="name" />
          </Styled.InputWraper>
          <Styled.InputWraper>
            <label htmlFor="number">Número:</label>
            <input id="number" type="number" name="number" />
          </Styled.InputWraper>
          <Styled.InputWraper>
            <label htmlFor="number">Preço:</label>
            <input id="price" type="number" step="any" name="price" />
          </Styled.InputWraper>
          <Styled.Button type="submit">Criar</Styled.Button>
        </Styled.Wrapper>
      </form>
    </Styled.Container>
  );
};

export default CreateProduct;
