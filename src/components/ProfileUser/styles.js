import styled, { css } from 'styled-components';

import { Container as ContainerProfileCardInfo } from '../ProfileCardInfo/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & ${ContainerProfileCardInfo} {
      margin-bottom: 20px;
    }
    padding-bottom: 32px;
    margin-bottom: 84px;
  `}
`;

export const Menu = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    position: fixed;
    background: ${theme.colors.white};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
  `}
`;

export const Link = styled.a`
  ${({ theme, hiddenSeeMore }) => css`
    display: ${hiddenSeeMore ? 'block' : 'none'};
  `}
`;
