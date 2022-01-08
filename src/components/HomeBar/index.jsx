import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

export const HomeBar = () => {
  return (
    <Styled.ToolBarWrapper>
        <ul>
            <li><Link to="/">Usuários</Link></li>
            <li><Link to="/create-user">Criar usuário</Link></li>
            <li><Link to="/products">Produtos</Link></li>
            <li><Link to="/create-product">Criar produto</Link></li>
            <li><Link to="/manager">Gerenciador</Link></li>
            <li><Link to="/relations">Relações</Link></li>

        </ul>

    </Styled.ToolBarWrapper>
  );
};
