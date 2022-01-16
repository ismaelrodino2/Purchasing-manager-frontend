import React, { useCallback, useContext } from 'react';
import * as Styled from './styles';
import axios from 'axios';
import { useState } from 'react';
import { ModalLoading } from 'components/ModalLoading';
import { ProductsContext } from 'context/ProductsContext';
import { TokenContext } from 'context/TokenContext';
import { FormControl } from 'components/FormControl';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';

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
          await axios.post(`${process.env.REACT_APP_API_URL}/products`, article, {
            headers: { Authorization: `Bearer ${token}` },
          });
          window.alert('Produto criado com sucesso');
          document.getElementById('form').reset();
          syncProducts();
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchData();
      setLoading(false);
    },
    [token, syncProducts],
  );

  return (
    <Styled.Container>
      {loading && <ModalLoading />}
      <Heading>Criar Produto</Heading>
      <form onSubmit={onSubmit} id="form">
        <Styled.Wrapper>
          <FormControl>
            <label htmlFor="name">Produto:</label>
            <input id="name" type="name" name="name" />
          </FormControl>
          <FormControl>
            <label htmlFor="number">Número:</label>
            <input id="number" type="number" name="number" />
          </FormControl>
          <FormControl>
            <label htmlFor="number">Preço:</label>
            <input id="price" type="number" step="any" name="price" />
          </FormControl>
          <Button type="submit">Criar</Button>
        </Styled.Wrapper>
      </form>
    </Styled.Container>
  );
};

export default CreateProduct;
