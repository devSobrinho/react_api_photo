import P from 'prop-types';
import { IoIosClose } from 'react-icons/io';

import * as Styled from './styles';
import { ProfileInfo } from '../ProfileInfo';

export const PhotoOpen = ({ userInfo, imgSrc }) => {
  return (
    <>
      <Styled.Container imgSrc={imgSrc}>
        {/* <img src={imgSrc} alt="" /> */}
        <Styled.Image src={imgSrc} alt={''} aria-label="image-modal" />
        <ProfileInfo {...userInfo} />
        <Styled.CloseIcon>
          <IoIosClose color="white" size="3.2rem" />
        </Styled.CloseIcon>
      </Styled.Container>
    </>
  );
};

PhotoOpen.propTypes = {
  imgSrc: P.string.isRequired,
  userInfo: P.shape(ProfileInfo.propTypes).isRequired,
};
