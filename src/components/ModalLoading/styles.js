import styled from "styled-components";
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: fixed;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
