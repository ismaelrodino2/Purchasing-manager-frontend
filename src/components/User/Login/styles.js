import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: calc(100vh - 54px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.4rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & label {
    margin-bottom: 5px;
    color: #979797;
    font-size: 16px;
  }
  & input {
    line-height: 3rem;
    ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.small};
      border: 1px solid ${theme.colors.primaryColor};
    `}
    border-radius: 0.5rem;
    outline: 0;
    padding: 0.2rem 0.5rem;
  }
`;

export const Error = styled.div`
  color: red;
`;
