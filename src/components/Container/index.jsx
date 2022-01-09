import React, { useContext } from 'react';
import * as Styled from './styles';

const Container = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Container;
