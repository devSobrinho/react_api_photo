import P from 'prop-types';

import * as Styled from './styles';
import { Heading } from '../Heading';

export const Logo = ({ text }) => {
  return (
    <>
      <Styled.Container>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1099/1099294.png"
          alt="logo"
        />
        <Heading as="h1">{text}</Heading>
      </Styled.Container>
    </>
  );
};

Logo.propTypes = {
  text: P.string.isRequired,
};
