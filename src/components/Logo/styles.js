import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;


    & ${Title} {
      text-transform: lowercase;
      font-size: 4.8rem;
      color: ${theme.colors.logoColor};
    }

    & img {
      width: 6.4rem;
      height: 6.4rem;
      background: transparent;
      margin-right: 2rem;
      margin-bottom: 1rem;
      animation: rotate-logo 8s linear infinite;
    }
    @keyframes rotate-logo {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
    }
  `}
`;
