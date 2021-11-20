import P from 'prop-types';

import * as Styled from './styles';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { MenuLink } from '../MenuLink';
import { Button } from '../Button';
import { ProfileInfo } from '../ProfileInfo';
import { SpanBar } from '../SpanBar';
import { Link } from 'react-router-dom';

export const HomeComponent = ({
  textLogo,
  textButtonOne,
  textButtonTwo,
  info,
}) => {
  return (
    <>
      {/* {children} */}
      <Styled.Content>
        <Logo text={textLogo} />
      </Styled.Content>
      <Styled.Container>
        <ProfileInfo {...info} />
        <Styled.ContainerButtons>
          <Link to={`/login`}>
            <Button text={textButtonOne} />
          </Link>
          <Link to={`/register`}>
            <Button text={textButtonTwo} invertStyled />
          </Link>
        </Styled.ContainerButtons>

        <SpanBar />
      </Styled.Container>
    </>
  );
};

HomeComponent.propTypes = {
  // children: P.node.isRequired,
  textLogo: P.string.isRequired,
  textButtonOne: P.string.isRequired,
  textButtonTwo: P.string.isRequired,
  info: P.shape(ProfileInfo.propTypes).isRequired,
  // links: P.arrayOf(P.shape(MenuLink.propTypes).isRequired).isRequired,
};
