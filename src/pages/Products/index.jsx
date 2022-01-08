import React, { useContext } from "react";
import * as Styled from "./styles";
import { ProductsContext } from "context/ProductsContext";

const Products = () => {
  const { allProducts } = useContext(ProductsContext);

  return (
    <Styled.Container>
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
