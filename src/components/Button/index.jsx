import React from 'react';
import * as Styled from './styles';
import P from 'prop-types';

export const Button = ({ onClick, children }) => {
  return <Styled.Container onClick={onClick}>{children}</Styled.Container>;
};

Button.P = {
    onClick: P.func,
    children: P.node.isRequired
};
