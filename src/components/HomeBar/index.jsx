import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

export const HomeBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Styled.MenuIcon onClick={() => setActive(!active)}>
        <Menu size="48" />
      </Styled.MenuIcon>
      <Styled.Container visible={active} onClick={() => setActive(!active)}>
        <Link to="/">Usuários</Link>

        <Link to="/create-user">Criar usuário</Link>

        <Link to="/products">Produtos</Link>

        <Link to="/create-product">Criar produto</Link>

        <Link to="/manager">Gerenciador</Link>

        <Link to="/relations">Relações</Link>
      </Styled.Container>
    </div>
  );
};
