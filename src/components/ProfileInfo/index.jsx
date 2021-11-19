import P from 'prop-types';

import * as Styled from './styles';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { ImageProfile } from '../ImageProfile';

export const ProfileInfo = ({
  nameUser,
  userTag,
  userPhoto,
  textStyled = false,
}) => {
  return (
    <>
      <Styled.Container>
        <ImageProfile imgSrc={userPhoto} size="small" />
        <Styled.Content textStyled={textStyled}>
          <Heading as="h3" asStylesActive>
            {nameUser}
          </Heading>
          <Paragraph
            size="small"
            lineHeight="small"
            weight="normal"
            text={userTag}
          />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

ProfileInfo.propTypes = {
  nameUser: P.string.isRequired,
  userTag: P.string.isRequired,
  userPhoto: P.string.isRequired,
  textStyled: P.bool,
};
