import React, { useCallback, useContext } from 'react';
import { TokenContext } from 'context/TokenContext';
import { UsersContext } from 'context/UsersContext';

import * as Styled from './styles';
import axios from 'axios';
import { useState } from 'react';
import { ModalLoading } from 'components/ModalLoading';
import { Container } from 'components/Container/styles';
import { Button } from 'components/Button';
import { FormControl } from 'components/FormControl';

const CreateUser = () => {
  const { token } = useContext(TokenContext);

  const [loading, setLoading] = useState(false);
  const { syncUsers } = useContext(UsersContext);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const article = {
        name: e.target.name.value,
        email: e.target.email.value,
      };

      const fetchData = async () => {
        setLoading(true);
        try {
          await axios.post(`${process.env.REACT_APP_API_URL}/users`, article, {
            headers: { Authorization: `Bearer ${token}` },
          });
          window.alert('Usuário criado com sucesso');
          document.getElementById('form').reset();
          syncUsers();
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchData();
      setLoading(false);
    },
    [token, syncUsers],
  );

  return (
    <Container>
      {loading && <ModalLoading />}
      <h1>Criar usuário</h1>
      <form
        onSubmit={onSubmit}
        id="form"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Styled.Wrapper>
          <FormControl>
            <label htmlFor="name">Nome:</label>
            <input id="name" type="name" name="name" />
          </FormControl>
          <FormControl>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" name="email" />
          </FormControl>
          <Button type="submit">Criar</Button>
        </Styled.Wrapper>
      </form>
    </Container>
  );
};

export default CreateUser;
