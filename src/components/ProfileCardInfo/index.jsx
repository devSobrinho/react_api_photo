import P from 'prop-types';
import { resolve } from 'path';

import { Heading } from '../Heading';
import { ImageProfile } from '../ImageProfile';
import { Paragraph } from '../Paragraph';

import * as Styled from './styles';

const image = resolve('user-photo-default.png');

export const ProfileCardInfo = ({
  userPhoto = image,
  userName,
  userLocalization = '',
}) => {
  return (
    <>
      <Styled.Container>
        <ImageProfile imgSrc={userPhoto} size={'large'} />
        <Heading as={'h1'} text={userName} />
        <Heading as={'h2'} text={userLocalization} asStylesActive />
      </Styled.Container>
    </>
  );
};

ProfileCardInfo.propTypes = {
  userPhoto: P.string,
  userName: P.string.isRequired,
  userLocalization: P.string,
};
