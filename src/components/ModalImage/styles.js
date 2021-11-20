import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, modalPhoto }) => css`
    display: ${modalPhoto ? 'flex ' : 'none'};
    align-items: center;
    position: relative;
    height: 100vh;
    background-color: ${theme.colors.mediumGray};
    z-index: 1;

    /* @media ${theme.media.lteMedium} {
      max-width: 49rem;
      max-height: 87.2rem;
    } */
  `}
`;
