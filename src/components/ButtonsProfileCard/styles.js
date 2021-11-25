import styled, { css } from 'styled-components';
import { Container as ButtonContainer } from '../Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & ${ButtonContainer} {
      padding: 0.4rem;
    }
    margin-bottom: 2.4rem;
  `}
`;
