import styled, { css } from 'styled-components';
export const ToolBarWrapper = styled.div`
  ${({ theme, visible }) => css`
    display: flex;
    background-color: brown;
    display: ${props => props.active ? "flex" : "none"};

    & ul {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      list-style: none;
      position: fixed;
      z-index: 5;
      background-color: ${theme.colors.secondaryColor};
      height: 100vh;
      top: 0;
      right: 0;
      padding: 10px;
      padding-top: 100px;
      width: 100%;
    }
    & a {
      padding-right: 10px;
      text-decoration: none;
      color: black;
    }
    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: brown;
      & ul {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        list-style: none;
        height: auto;
        position: initial;
        padding-top: 0;
      }
      & a {
        padding-right: 10px;
        text-decoration: none;
        color: black;
      }
    }
  `}
`;
export const MenuIcon = styled.div`
  position: fixed;
  z-index: 10;
  top: 15px;
  right: 20px;
  ${({ theme, visible }) => css`
  @media ${theme.media.lteMedium} {
    display: none;
  `}
`;
