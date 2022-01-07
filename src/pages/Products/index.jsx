import React, { useContext, useEffect } from "react";
import {
  ProductsContext,
  StoreContext,
  UsersContext,
} from "components/Store/Context";
import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import { LoadingDots } from "components/Loading";
import { ModalLoading } from "components/ModalLoading";

const Products = () => {
  const { token } = useContext(StoreContext);

  const userToken = token.replace(/['"]+/g, "");
  const [loading, setLoading] = useState();
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { allUsers } = useContext(UsersContext);

  console.log(allProducts);
  console.log(allUsers);

  return (
    <Styled.Container>
      {loading && <ModalLoading />}
      <h1>Lista de Produtos</h1>
      <Styled.Grid>
        {allProducts &&
          allProducts.map((el) => {
            return (
              <Styled.Wrapper>
                <p>Produto: {el.name}</p>
                <p>Número: {el.number}</p>
              </Styled.Wrapper>
            );
          })}
      </Styled.Grid>
    </Styled.Container>
  );
};

export default Products;
