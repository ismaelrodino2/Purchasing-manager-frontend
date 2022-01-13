import React from 'react';
import * as Styled from './styles';
import P from 'prop-types';

const Container = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
Container.P = {
  children: P.node.isRequired,
};
export default Container;
