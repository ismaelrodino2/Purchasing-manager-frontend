import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.primaryColor};
    & a {
      display: block;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
      padding: ${theme.spacings.small};
      color: ${theme.colors.white};
      position: relative;
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
  `}
`;
