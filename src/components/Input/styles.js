import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme, validStyled }) => css`
    padding: 1.7rem;
    font-family: ${theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.dark};
    width: 100%;
    max-width: 34.3rem;
    max-height: 5.2rem;
    font-style: normal;
    line-height: 18px;

    background: ${theme.fonts.family.white};
    border: 0.2rem solid ${theme.colors.dark};
    border-color:${
      validStyled
        ? `${theme.colors.dark};`
        : `${theme.colors.validations.error};`
    }

    box-sizing: border-box;
  `}
`;

export const Container = styled.label`
  ${({ theme }) => css`
    /* identical to box height */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0 0.8rem 0;
  `}
`;
