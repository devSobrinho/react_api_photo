import P from 'prop-types';

import * as Styled from './styles';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { MenuLink } from '../MenuLink';
import { Button } from '../Button';
import { ProfileInfo } from '../ProfileInfo';
import { SpanBar } from '../SpanBar';

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
          <Button text={textButtonOne} />
          <Button text={textButtonTwo} invertStyled />
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
