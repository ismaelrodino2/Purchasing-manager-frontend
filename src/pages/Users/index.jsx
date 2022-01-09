import React, { useContext } from 'react';
import * as Styled from './styles';
import { UsersContext } from 'context/UsersContext';
import { Heading } from '../../components/Heading';
import Container from 'components/Container';

const Users = () => {
  const { allUsers } = useContext(UsersContext);

  return (
    <Container>
      <Heading>Usuários</Heading>
      <Styled.Grid>
        {allUsers.map((el) => {
          return (
            <Styled.Wrapper>
              <p>Nome: {el.name}</p>
              <p>E-mail: {el.email}</p>
            </Styled.Wrapper>
          );
        })}
      </Styled.Grid>
    </Container>
  );
};

export default Users;
