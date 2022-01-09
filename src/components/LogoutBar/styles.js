import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 74px;
    background-color: ${theme.colors.primaryColor};
  `}
`;
