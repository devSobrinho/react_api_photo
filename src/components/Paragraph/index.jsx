import P from 'prop-types';

import * as Styled from './styles';

export const Paragraph = ({ text, size, lineHeight, weight }) => {
  return (
    <>
      <Styled.Content size={size} lineHeight={lineHeight} weight={weight}>
        {text}
      </Styled.Content>
    </>
  );
};

Paragraph.propTypes = {
  text: P.string.isRequired,
  size: P.oneOf(['small', 'medium', 'large']).isRequired,
  lineHeight: P.oneOf(['small', 'medium', 'large']).isRequired,
  weight: P.oneOf(['normal', 'bolder']).isRequired,
};
