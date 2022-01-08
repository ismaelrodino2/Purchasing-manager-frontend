import { TokenContext } from "context/TokenContext";
import React, { useContext } from "react";
import * as Styled from "./styles";

export const LogoutBar = () => {
  const { setToken } = useContext(TokenContext);

  return (
    <Styled.Container>
      <button onClick={() => setToken(null)}>Sair</button>
    </Styled.Container>
  );
};
