import React, { useCallback, useContext, useEffect } from "react";
import { StoreContext, UsersContext } from "components/Store/Context";
import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import useStorage from "utils/useStorage";
import { ModalLoading } from "components/ModalLoading";
import syncUsers from "components/Store/syncUsers";

const CreateUser = () => {
  const { token } = useContext(StoreContext);
  const userToken = token.replace(/['"]+/g, "");
  console.log(token);

  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const { setAllusers } = useContext(UsersContext);

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
          const { data: response } = await axios.post(
            "http://localhost:3333/users",
            article,
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          );
          setUsers(response);
          window.alert("usuário criado com sucesso");
          document.getElementById("form").reset();
          syncUsers(userToken, setAllusers);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      };

      fetchData();
    },
    [userToken, setAllusers]
  );

  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default CreateUser;
