import styled, { css } from 'styled-components';

const invertColor = (theme) => css`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
`;

export const Button = styled.input`
  ${({ theme, invertStyled }) => css`
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.bolder};
    line-height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    min-width: 16.7rem;
    max-width: 34.3rem;
    height: 5.2rem;
    border: 0.2rem solid ${theme.colors.dark};
    box-sizing: border-box;
    border-radius: 6px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    ${invertStyled ? invertColor(theme) : ''};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0.8rem auto;
    width: 100%;

    &:nth-child(1) {
      margin-right: 0.45rem;
      margin-left: 0;
    }
    &:nth-child(2) {
      margin-right: 0;
      margin-left: 0.45rem;
    }
  `}
`;
