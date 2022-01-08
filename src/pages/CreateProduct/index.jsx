import React, { useCallback, useContext } from "react";
import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import { ModalLoading } from "components/ModalLoading";
import { ProductsContext } from "context/ProductsContext";
import { TokenContext } from "context/TokenContext";

const CreateProduct = () => {
  const { token } = useContext(TokenContext);

  const [loading, setLoading] = useState(false);
  const { syncProducts } = useContext(ProductsContext);
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
          await axios.post("http://localhost:3333/products", article, {
            headers: { Authorization: `Bearer ${token}` },
          });
          window.alert("Produto criado com sucesso");
          document.getElementById("form").reset();
          syncProducts();
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchData();
      setLoading(false);
    },
    [token, syncProducts]
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
