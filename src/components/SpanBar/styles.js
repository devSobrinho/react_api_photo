import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0.9rem;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    &::before {
      content: '';
      display: flex;
      background-color: ${theme.colors.dark};
      border-radius: 1rem;
      width: 40%;
      /* width: 100%; */
      /* max-width: 13.5rem; */
      max-width: 40rem;
      height: 0.5rem;
      margin: 0 auto;
      margin-bottom: 0.8rem;
    }
  `}
`;
