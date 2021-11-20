import styled, { css } from 'styled-components';

import { Container as ButtonContainer } from '../Button/styles';

export const Form = styled.form`
  ${({ theme }) => css`
    margin: 0 1.6rem;
    width: 100%;
    max-width: 34.3rem;
  `}
`;

export const ContainerNext = styled.div`
  ${({ theme, hidden }) => css`
    display: ${hidden ? 'none' : 'block'};

    & ${ButtonContainer} {
      margin-left: 0rem;
    }
  `}
`;

export const ReturnIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    left: 16px;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
  `}
`;
