import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const LoginBar = () => {
  return (
    <Styled.Container>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Styled.Container>
  );
};
