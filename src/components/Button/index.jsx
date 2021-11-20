import P from 'prop-types';

import * as Styled from './styles';
import { Paragraph } from '../Paragraph';

export const Button = ({ text, invertStyled = false, onClick = () => {} }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Button
          onClick={onClick}
          invertStyled={invertStyled}
          value={text}
          type="submit"
        />
      </Styled.Container>
    </>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  invertStyled: P.bool,
  onClick: P.func,
  // ...Paragraph.propTypes,
};
