import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 1.7rem;
    font-family: ${theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.dark};
    width: 100%;
    min-width: 34.3rem;
    max-height: 5.2rem;
    font-style: normal;
    line-height: 18px;

    background: ${theme.fonts.family.white};
    border: 0.2rem solid ${theme.colors.dark};
    box-sizing: border-box;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    /* identical to box height */
    display: flex;
    align-items: center;
  `}
`;
