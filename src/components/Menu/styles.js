import styled, { css } from 'styled-components';

import { Container as MenuLinkContainer } from '../MenuLink/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 800px;
    border-top: 0.05rem solid rgba(0, 0, 0, 0.3);
    padding: 0.9rem 1.5rem 2rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & ${MenuLinkContainer}:nth-child(3) {
      background-color: blue;
      width: 7rem;

      background: linear-gradient(60deg, #ff4d00, #ff00d6);
      /* background: linear-gradient(60deg, #ff4d00, #f46d00, #e73c7e, #ff00d6); */
      background-size: 200% 200%;
      border-radius: 20px;
      animation: gradient 4s ease infinite;
    }
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
    }

    & ${MenuLinkContainer}:nth-child(1n):hover {
      font-size: 2.5rem;
    }
  `}
`;
