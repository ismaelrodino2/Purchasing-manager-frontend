import React, { useCallback, useContext, useState } from 'react';
import * as Styled from './styles';
import { UsersContext } from 'context/UsersContext';
import { Heading } from '../../components/Heading';
import Container from 'components/Container';
import { Button } from '../../components/Button';
import { ModalLoading } from '../../components/ModalLoading';
import axios from 'axios';
import { TokenContext } from 'context/TokenContext';

const Users = () => {
  const { allUsers } = useContext(UsersContext);
  const [loading, setLoading] = useState(false);
  const { syncUsers } = useContext(UsersContext);
  const { token } = useContext(TokenContext);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      const article = {
        name: event.target.name.value,
        email: event.target.email.value,
      };
      await axios.delete('http://localhost:3333/users', {
        data: {
          name: event.target.name.value,
          email: event.target.email.value,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      syncUsers()
      setLoading(false);
    },
    [token, syncUsers],
  );
  return (
    <Container>
      {loading && <ModalLoading />}
      <Heading>Usuários</Heading>
      <Styled.Grid>
        {allUsers.map((el) => {
          return (
            <Styled.Wrapper key={el.id}>
              <form onSubmit={onSubmit}>
                <p>Nome: <input name="name" type="text" value={el.name} readonly /></p>
                <p>E-mail: <input name="email" type="text" value={el.email} readonly /></p>
                <Button type="submit">Excluir</Button>
              </form>
            </Styled.Wrapper>
          );
        })}
      </Styled.Grid>
    </Container>
  );
};

export default Users;
