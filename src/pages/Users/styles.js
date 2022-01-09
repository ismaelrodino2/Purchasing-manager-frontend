import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 7px;
  width: fit-content;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & span {
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 210px);
  gap: 10px;
  justify-content: center;
  padding: 1rem;
`;
