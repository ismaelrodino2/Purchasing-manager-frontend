import styled, { css } from 'styled-components';

export const FormControl = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & label {
      margin-bottom: 5px;
      color: #979797;
      font-size: 16px;
      color: ${theme.colors.primaryColor};
    }
    & input {
      line-height: 3rem;
      font-size: ${theme.fonts.sizes.small};
      border: 1px solid ${theme.colors.primaryColor};
      border-radius: 0.5rem;
      outline: 0;
      padding: 0.2rem 0.5rem;
    }
  `}
`;
