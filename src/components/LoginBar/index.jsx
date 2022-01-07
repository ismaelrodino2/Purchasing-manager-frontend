import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

export const LoginBar = () => {
  return (
    <Styled.ToolBarWrapper>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </Styled.ToolBarWrapper>
  );
};
