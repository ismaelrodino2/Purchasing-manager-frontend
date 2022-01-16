import React, { useCallback, useContext, useState } from 'react';
import * as Styled from './styles';
import { ProductsContext } from 'context/ProductsContext';
import { Container } from 'components/Container/styles';
import axios from 'axios';
import { TokenContext } from 'context/TokenContext';
import { Button } from 'components/Button';
import { ModalLoading } from 'components/ModalLoading';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const { syncProducts } = useContext(ProductsContext);
  const { token } = useContext(TokenContext);
  const { allProducts } = useContext(ProductsContext);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      await axios.delete(`${process.env.REACT_APP_API_URL}/products`, {
        data: {
          name: event.target.name.value,
          number: event.target.number.value,
          price: event.target.price.value,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      syncProducts();
      setLoading(false);
    },
    [token, syncProducts],
  );
  return (
    <Container>
      {loading && <ModalLoading />}
      <h1>Lista de Produtos</h1>
      <Styled.Grid>
        {allProducts &&
          allProducts.map((el) => {
            return (
              <Styled.Wrapper key={el.id}>
                <form onSubmit={onSubmit}>
                  <p>
                    Nome:
                    <input name="name" type="text" value={el.name} readonly />
                  </p>
                  <p>
                    Quantidade:
                    <input
                      name="number"
                      type="number"
                      value={el.number}
                      readonly
                    />
                  </p>
                  <p>
                    Preço:
                    <input
                      name="price"
                      type="number"
                      value={el.price}
                      readonly
                    />
                  </p>
                  <Button type="submit">Excluir</Button>
                </form>
              </Styled.Wrapper>
            );
          })}
      </Styled.Grid>
    </Container>
  );
};

export default Products;
