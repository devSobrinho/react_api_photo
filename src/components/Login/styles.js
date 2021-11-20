import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Form = styled.form`
  ${({ theme }) => css`
    margin: 0 1.6rem;
    width: 100%;
    max-width: 34.3rem;

    & ${Title} {
      margin-bottom: 2.4rem;
    }
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

export const ReturnIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    left: 16px;
  `}
`;
