import P from 'prop-types';
import { useContext } from 'react';

import * as Styled from './styles';

export const Heading = ({
  text,
  size = 'huge',
  as,
  asStylesActive = false,
  font = 'primary',
  weight = 'normal',
  uppercase = false,
}) => {
  return (
    <>
      <Styled.Title
        size={size}
        as={as}
        font={font}
        weight={weight}
        asStylesActive={asStylesActive}
      >
        {text}
      </Styled.Title>
    </>
  );
};

Heading.propTypes = {
  text: P.string.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3']).isRequired,
  asStylesActive: P.bool,
  uppercase: P.bool,
  size: P.oneOf(['big', 'huge']),
  font: P.oneOf(['primary', 'secondary', 'default']),
  weight: P.oneOf(['light', 'normal', 'bold', 'bolder']),
};
