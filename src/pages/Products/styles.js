import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 7px;
    width: fit-content;
    text-align-last: center;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
    & input {
    border: none;
    font-family: ${theme.fonts.default};
    font-size: ${theme.fonts.sizes.small};
    padding: 1rem 0;
    background: none;
    pointer-events:none;
  }
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 10px;
  justify-content: center;
  padding: 10px;
`;
