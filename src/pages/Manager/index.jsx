import axios from 'axios';
import { ModalLoading } from 'components/ModalLoading';
import { ProductsContext } from 'context/ProductsContext';
import { TokenContext } from 'context/TokenContext';
import { UsersContext } from 'context/UsersContext';
import React, { useContext, useState } from 'react';
import * as Styled from './styles';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { FormControl } from 'components/User/Login/styles';

const Manager = () => {
  const [selectProduct, setSelectProduct] = useState();
  const [selectUser, setSelectUser] = useState();
  const { allProducts } = useContext(ProductsContext);
  const { allUsers } = useContext(UsersContext);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(TokenContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const article = {
      qnt: e.target.number.value,
      product_id: selectProduct,
      user_id: selectUser,
    };
    console.log(article);
    const fetchData = async () => {
      setLoading(true);
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/makerelation`, article, {
          headers: { Authorization: `Bearer ${token}` },
        });
        window.alert('relação criada com sucesso');
        document.getElementById('form').reset();
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        {loading && <ModalLoading />}
        <form
          onSubmit={onSubmit}
          id="form"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Heading>Escolha o produto</Heading>
          <select
            value={selectProduct || ''}
            onChange={(e) => setSelectProduct(e.target.value)}
          >
            <option value={''}>{''}</option>

            {allProducts.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
          <Heading>Unidades</Heading>
          <FormControl>
            <input type="number" name="number" />
          </FormControl>
          <Heading>Escolha o usuário</Heading>
          <select
            value={selectUser || ''}
            onChange={(e) => setSelectUser(e.target.value)}
          >
            <option value={''}>{''}</option>

            {allUsers.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
          <Button>Criar Relação</Button>
        </form>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Manager;
