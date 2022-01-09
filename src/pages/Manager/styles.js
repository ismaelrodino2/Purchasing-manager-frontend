import styled from 'styled-components';
import { Container as StyledContainer } from 'components/Container/styles';

export const Container = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & span {
    font-weight: bold;
  }
  & h1, select {
    margin: 15px 0;
  }
`;
