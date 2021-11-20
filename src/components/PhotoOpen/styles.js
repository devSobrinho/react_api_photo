import styled, { css } from 'styled-components';
import { ProfileInfo } from '../ProfileInfo';
import { Container as ProfileInfoContainer } from '../ProfileInfo/styles';

export const Image = styled.img`
  ${({ theme, imgSrc }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const Container = styled.div`
  ${({ theme, imgSrc }) => css`
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & ${ProfileInfoContainer} {
      position: absolute;
      top: 4.6rem;
      left: 1.6rem;
      z-index: 4;
    }
  `}
`;

export const CloseIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 4.4rem;
    right: 1.4rem;
  `}
`;
