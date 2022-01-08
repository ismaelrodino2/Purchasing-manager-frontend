import React, { useContext } from "react";
import * as Styled from "./styles";
import { UsersContext } from "context/UsersContext";

const Users = () => {
  const { allUsers } = useContext(UsersContext);

  return (
    <Styled.Container>
      <h1>Lista de usuários</h1>
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
    </Styled.Container>
  );
};

export default Users;
