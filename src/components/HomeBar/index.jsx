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
      <Styled.ToolBarWrapper active={active} onClick={() => setActive(!active)}>
        <ul>
          <li>
            <Link to="/">Usuários</Link>
          </li>
          <li>
            <Link to="/create-user">Criar usuário</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/create-product">Criar produto</Link>
          </li>
          <li>
            <Link to="/manager">Gerenciador</Link>
          </li>
          <li>
            <Link to="/relations">Relações</Link>
          </li>
        </ul>
      </Styled.ToolBarWrapper>
    </div>
  );
};
