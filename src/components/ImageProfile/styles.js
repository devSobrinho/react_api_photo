import styled, { css } from 'styled-components';

const imgSize = {
  small: (theme) => css`
    height: ${theme.sizes.small};
    width: ${theme.sizes.small};
  `,
  medium: (theme) => css`
    height: ${theme.sizes.medium};
    width: ${theme.sizes.medium};
  `,
  large: (theme) => css`
    height: ${theme.sizes.large};
    width: ${theme.sizes.large};
  `,
  xlarge: (theme) => css`
    height: ${theme.sizes.xlarge};
    width: ${theme.sizes.xlarge};
  `,
};

export const ContainerImage = styled.div`
  ${({ theme, size, imgSrc }) => css`
    & img {
      ${imgSize[size](theme)};
      background-position: center;
      background-size: cover;
      border-radius: 50%;
    }
  `}
`;
