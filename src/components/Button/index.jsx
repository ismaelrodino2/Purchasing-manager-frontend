import React from 'react';
import * as Styled from './styles';

export const Button = ({onClick, children }) => {
  return <Styled.Container onClick={onClick}>{children}</Styled.Container>;
};
