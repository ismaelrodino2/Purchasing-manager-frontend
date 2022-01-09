import { Button } from 'components/Button';
import { TokenContext } from 'context/TokenContext';
import React, { useContext } from 'react';
import * as Styled from './styles';

export const LogoutBar = () => {
  const { setToken } = useContext(TokenContext);

  return (
    <Styled.Container>
      <Button onClick={() => setToken(null)}><h2>Sair</h2></Button>
    </Styled.Container>
  );
};
