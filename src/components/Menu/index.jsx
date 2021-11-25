import P from 'prop-types';
import { BsHouse, BsSearch, BsPlus, BsChat, BsPerson } from 'react-icons/bs';

import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import { useEffect } from 'react';
import { SpanBar } from '../SpanBar';
import mock from './mock';

export const Menu = () => {
  const { links } = mock;

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
  // index: P.number,
};
