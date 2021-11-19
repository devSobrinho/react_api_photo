import P from 'prop-types';
import { BsHouse, BsSearch, BsPlus, BsChat, BsPerson } from 'react-icons/bs';

import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import { useEffect } from 'react';
import { SpanBar } from '../SpanBar';

export const Menu = ({ links }) => {
  return (
    <>
      <Styled.Container>
        {links.map((link, index) => (
          <MenuLink key={index} colorWhite={link.colorWhite}>
            {link.children}
          </MenuLink>
        ))}
      </Styled.Container>
      <SpanBar />
    </>
  );
};

Menu.propTypes = {
  links: P.arrayOf(P.shape(MenuLink.propTypes).isRequired).isRequired,
  // index: P.number,
};
