import P from 'prop-types';

import * as Styled from './styles';
import { Paragraph } from '../Paragraph';

export const Button = ({ text, invertStyled = false }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Button invertStyled={invertStyled}>{text}</Styled.Button>
      </Styled.Container>
    </>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  invertStyled: P.bool,
  // ...Paragraph.propTypes,
};
