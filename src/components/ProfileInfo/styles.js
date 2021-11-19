import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Content as Paragraph } from '../Paragraph/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const Content = styled.div`
  ${({ theme, textStyled }) => css`
    display: flex;
    flex-direction: column;
    margin-left: 0.8rem;

    & ${Title} {
      ${textStyled === true ? `color: ${theme.colors.white};` : ''};
    }
    & ${Paragraph} {
      ${textStyled ? `color: ${theme.colors.white};` : ''};
      opacity: 0.8;
    }

    & ${Paragraph}::before {
      content: '@';
    }
  `}
`;
