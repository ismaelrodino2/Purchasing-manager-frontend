import {StoreContext} from "components/Store/Context";
import React, { useContext } from "react";
import * as Styled from "./styles";

export const LogoutBar = () => {
  const { setToken } = useContext(StoreContext);

  return (
    <Styled.Container>
      <button onClick={() => setToken(null)}>Sair</button>
    </Styled.Container>
  );
};
