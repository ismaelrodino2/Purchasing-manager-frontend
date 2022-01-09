import React, { useContext } from "react";
import * as Styled from "./styles";
import { ProductsContext } from "context/ProductsContext";
import { Container } from "components/Container/styles";

const Products = () => {
  const { allProducts } = useContext(ProductsContext);

  return (
    <Container>
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
    </Container>
  );
};

export default Products;
