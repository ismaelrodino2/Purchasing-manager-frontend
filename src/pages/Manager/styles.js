import styled from "styled-components";
export const Container = styled.div`
  height: calc(100vh - 54px - 21px);
  padding: 14px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
display: flex;
  padding: 7px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  & span {
    font-weight: bold;
  }
`;

export const InputWraper = styled.div`
  padding: 10px;

  & label {
    padding-right: 10px;
  }
   & input:focus {
      outline: none;
    }
  
`;

export const Button = styled.button`
  display: flex;
  background: green;
  padding: 0 6px;
  align-items: center;
`;