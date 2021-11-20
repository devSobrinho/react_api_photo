import P from 'prop-types';
import { PhotoOpen } from '../PhotoOpen';

import * as Styled from './styles';

export const ModalImage = ({ userInfo, imgSrc, modalPhoto }) => {
  return (
    <>
      <Styled.Container modalPhoto={modalPhoto}>
        <PhotoOpen userInfo={userInfo} imgSrc={imgSrc} />
      </Styled.Container>
    </>
  );
};

ModalImage.propTypes = {
  modalPhoto: P.bool.isRequired,
  ...PhotoOpen.propTypes,
};
