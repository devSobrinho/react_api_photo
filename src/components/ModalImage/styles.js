import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    position: relative;

    img {
      z-index: -1;
    }

    @media ${theme.media.lteMedium} {
      max-width: 49rem;
      max-height: 87.2rem;
    }
  `}
`;
