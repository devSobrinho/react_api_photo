import styled, { css } from 'styled-components';

const textSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
};

const textLine = {
  small: (theme) => css`
    line-height: 13px;
  `,
  medium: (theme) => css`
    line-height: 15px;
  `,
  large: (theme) => css`
    line-height: 18px;
  `,
};

const textWeight = {
  normal: (theme) => css`
    font-weight: ${theme.fonts.weight.normal};
  `,
  bolder: (theme) => css`
    font-weight: ${theme.fonts.weight.bolder};
  `,
};

export const Content = styled.p`
  ${({ theme, size, lineHeight, weight }) => css`
    font-style: normal;
    font-family: ${theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.colors.dark};
    ${textSize[size](theme)};
    ${textLine[lineHeight](theme)};
    ${textWeight[weight](theme)};
  `}
`;
