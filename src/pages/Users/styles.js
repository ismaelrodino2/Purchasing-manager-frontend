import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  padding: 7px;
  margin: 8px;
  width: fit-content;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & input {
    border: none;
    font-family: ${theme.fonts.default};
    font-size: ${theme.fonts.sizes.small};
    padding: 1rem 0;
  }
`} 

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 210px);
  gap: 10px;
  justify-content: center;
  padding: 1rem;
  text-align-last: center;
`;
