import styled, { css } from 'styled-components';

import { Container as LogoContainer } from '../Logo/styles';
import { Container as ProfileInfoContainer } from '../ProfileInfo/styles';
import { Span } from '../SpanBar/styles';
import { Container as ButtonContainer } from '../Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1.6rem;
    padding-top: 1.2rem;
    padding-bottom: 0.9rem;
    background: ${theme.colors.white};
    width: 100%;
    z-index: 2;

    & ${ProfileInfoContainer} {
      position: absolute;
      bottom: 100%;
      left: 0;
      margin-left: 1.6rem;
      margin-bottom: 2rem;
    }

    & ${ButtonContainer} {
      @media ${theme.media.lteMedium} {
        &:nth-child(1) {
          justify-content: flex-end;
          margin-right: 3%;
        }
        &:nth-child(2) {
          justify-content: flex-start;
          margin-left: 3%;
        }
      }
    }

    & ${Span}::before {
      @media ${theme.media.lteMedium} {
      }
    }
  `}
`;

export const ContainerButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    & a {
      margin-right: 0.45rem;
      margin-left: 0;
    }
    & a:nth-child(2) {
      margin-right: 0;
      margin-left: 0.45rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100vh;
    /* max-height: 70.7rem; */
    width: 100%;

    & ${LogoContainer} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ${ProfileInfoContainer} {
      position: absolute;
      bottom: 0;
      margin-left: 1.6rem;
      margin-bottom: 2rem;
    }

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
  `}
`;
