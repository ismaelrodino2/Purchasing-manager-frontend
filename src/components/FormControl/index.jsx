import * as Styled from './styles';
import React from 'react';
import P from 'prop-types';

export const FormControl = ({ children }) => {
  return <Styled.FormControl>{children}</Styled.FormControl>;
};

FormControl.P = {
    onClick: P.func,
    children: P.node.isRequired
};
