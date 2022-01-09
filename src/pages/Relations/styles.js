import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 7px;
  width: fit-content;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & span {
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 10px;
  justify-content: center;
`;
