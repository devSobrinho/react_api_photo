import P from 'prop-types';

import * as Styled from './styles';

export const MenuLink = ({ children, colorWhite = false }) => {
  return (
    <>
      <Styled.Container colorWhite={colorWhite}>{children}</Styled.Container>
    </>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  colorWhite: P.bool,
};
