import styled from 'styled-components';
import { Container as StyledContainer } from 'components/Container/styles';

export const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 20px;
  margin: 10px 0;
  max-width: 50rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & span {
    font-weight: bold;
  }
`;

export const InputWraper = styled.div`
  padding: 10px;

  & label {
    padding-right: 10px;
  }
  & input:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  background: green;
  padding: 0 6px;
  align-items: center;
`;
