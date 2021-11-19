import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, colorWhite }) => css`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1n) {
      color: ${colorWhite ? theme.colors.white : theme.colors.dark};
      background-color: ${colorWhite ? theme.colors.dark : theme.colors.white};
    }
  `}
`;
