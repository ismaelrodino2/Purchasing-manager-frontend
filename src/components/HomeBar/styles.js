import styled from "styled-components";
export const ToolBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: brown;
  & ul {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
  }
  & a {
    padding-right: 10px;
    text-decoration: none;
    color: black;
  }
`;
