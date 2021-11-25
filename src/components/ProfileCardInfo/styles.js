import styled, { css } from 'styled-components';
import { ContainerImage } from '../ImageProfile/styles';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${theme.media.lteMedium} {
    & ${ContainerImage} > img {
      height: ${theme.sizes.xlarge};
      width: ${theme.sizes.xlarge};
    }
  }



  & ${ContainerImage} {
    margin-top: .8rem;
    padding: 2.4rem;
  }
  & ${Title} {
    padding 0.8rem;
  }

  `}
`;
