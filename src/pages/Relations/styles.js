import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  width: fit-content;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & span {
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  gap: 40px;
  display: grid;
  padding: 20px 0;

  grid-template-columns: repeat(auto-fit, 230px);
  justify-content: center;
`;
