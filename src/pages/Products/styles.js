import styled from "styled-components";
export const Container = styled.div`
  height: calc(100vh - 54px - 21px - 20px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 7px;
`;

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
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 10px;
  justify-content: center;
`;
