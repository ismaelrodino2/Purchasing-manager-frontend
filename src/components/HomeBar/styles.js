import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme, visible }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    display: ${visible ? 'flex' : 'none'};
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    position: fixed;
    z-index: 5;
    background-color: ${theme.colors.mediumGray};
    height: 100vh;
    top: 0;
    right: 0;
    padding: 10px;
    width: 100%;
    & a {
      padding-right: 10px;
      text-decoration: none;
      color: black;
      display: flex;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
      padding: ${theme.spacings.small};
      color: ${theme.colors.primaryColor};
      position: relative;
      align-items: center;
    }
    & a::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }
    & a:hover::after {
      left: 25%;
      width: 50%;
    }

    & a {
      text-decoration: none;
      color: black;
    }
    @media ${theme.media.lteMedium} {
      background-color: ${theme.colors.primaryColor};
      display: flex;
      justify-content: center;
      flex-direction: row;
      text-decoration: none;
      list-style: none;
      height: auto;
      position: initial;
      & a{
        color: ${theme.colors.mediumGray};

      }
    }
  `}
`;
export const MenuIcon = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 10;
  top: 15px;
  right: 20px;
  ${({ theme, visible }) => css`
  @media ${theme.media.lteMedium} {
    display: none;
  `}
`;
