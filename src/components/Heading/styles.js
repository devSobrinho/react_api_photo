import styled, { css } from 'styled-components';

const asTitle = {
  h1: (theme) => css`
    ${fontFamily.primary(theme)};
    ${fontWeight.normal(theme)};
    ${titleSize.huge(theme)};
    line-height: 4rem;
    letter-spacing: -0.015em;
  `,
  h2: (theme) => css`
    ${fontFamily.secondary(theme)};
    ${fontWeight.bolder(theme)};
    ${titleSize.normal(theme)};
    line-height: 1.5rem;
    letter-spacing: 0.04em;
    ${titleCase(true)};
  `,
  h3: (theme) => css`
    ${fontFamily.secondary(theme)};
    ${fontWeight.bold(theme)};
    ${titleSize.normal(theme)};
    line-height: 1.5rem;
  `,
};

const fontFamily = {
  primary: (theme) => css`
    font-family: ${theme.fonts.family.primary};
  `,
  secondary: (theme) => css`
    font-family: ${theme.fonts.family.secondary};
  `,
  default: (theme) => css`
    font-family: ${theme.fonts.family.default};
  `,
};

const fontWeight = {
  light: (theme) => css`
    font-weight: ${theme.fonts.weight.light};
  `,
  normal: (theme) => css`
    font-weight: ${theme.fonts.weight.normal};
  `,
  bold: (theme) => css`
    font-weight: ${theme.fonts.weight.bold};
  `,
  bolder: (theme) => css`
    font-weight: ${theme.fonts.weight.bolder};
  `,
};

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  normal: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
  `,
};

const asStyles = (asStylesActive, as, theme) => css`
  ${asStylesActive ? asTitle[as](theme) : ''}
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.div`
  ${({ theme, size, font, weight, as, asStylesActive, uppercase }) => css`
    ${fontFamily[font](theme)};
    ${titleSize[size](theme)};
    ${fontWeight[weight](theme)};
    ${titleCase(uppercase)};
    color: ${theme.colors.dark};
    font-style: normal;
    display: flex;
    align-items: center;
    ${asStyles(asStylesActive, as, theme)}
  `}
`;
