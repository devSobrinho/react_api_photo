import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: 32px;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    max-width: ${320 * 3}px;
    justify-content: flex-start;
    /* width: 100vw;
    height: 100vw; */
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    width: ${100 / 3}%;
    /* max-width: 30rem; */
    height: ${100 / 3}vw;
    /* max-height: 30rem; */
    max-width: 320px;
    max-height: 320px;
    justify-content: center;
    align-items: center;
    /* background: ${theme.colors.dark}; */

    & img {
      padding: 0.1rem;
      position: absolute;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    @media ${theme.media.lteMedium} {
      & img {
        &:nth-child(1n) {
          padding: 5px 10px;
        }
        &:nth-child(3n) {
          padding-right: 0;
        }
        &:nth-child(3n + 1) {
          padding-left: 0;
        }
      }
    }
  `}
`;
