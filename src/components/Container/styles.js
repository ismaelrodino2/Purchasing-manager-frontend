import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 74px);
  max-width: 98rem;
  margin: 0 auto;
  padding: 0 7px;
  padding-top: 64px;
  text-align: center;
  ${({ theme }) => css`
  @media ${theme.media.lteMedium} {
    padding-top: 10px;
    min-height: calc(100vh - 74px - 74px);
  `}
`;
