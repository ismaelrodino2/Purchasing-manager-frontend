import React, { useCallback, useContext } from "react";
import { TokenContext } from "context/TokenContext";
import { UsersContext } from "context/UsersContext";

import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import { ModalLoading } from "components/ModalLoading";
import { Container } from "components/Container/styles";

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
          await axios.post("http://localhost:3333/users", article, {
            headers: { Authorization: `Bearer ${token}` },
          });
          window.alert("Usuário criado com sucesso");
          document.getElementById("form").reset();
          syncUsers();
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchData();
      setLoading(false);
    },
    [token, syncUsers]
  );

  return (
    <Container>
      {loading && <ModalLoading />}
      <h1>Criar usuário</h1>
      <form onSubmit={onSubmit} id="form">
        <Styled.Wrapper>
          <Styled.InputWraper>
            <label htmlFor="name">Nome:</label>
            <input id="name" type="name" name="name" />
          </Styled.InputWraper>
          <Styled.InputWraper>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" name="email" />
          </Styled.InputWraper>
          <Styled.Button type="submit">Criar</Styled.Button>
        </Styled.Wrapper>
      </form>
    </Container>
  );
};

export default CreateUser;
