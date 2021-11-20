import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    margin: 0 1.6rem;
    width: 100%;
    max-width: 34.3rem;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
