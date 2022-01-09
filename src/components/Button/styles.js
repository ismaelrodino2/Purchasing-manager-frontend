import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    padding: 8px 16px;
    height: fit-content;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
    }
  `}
`;
