import P from 'prop-types';
import { PhotoOpen } from '../PhotoOpen';

import * as Styled from './styles';

export const ModalImage = ({ userInfo, imgSrc }) => {
  return (
    <>
      <Styled.Container>
        <PhotoOpen userInfo={userInfo} imgSrc={imgSrc} />
      </Styled.Container>
    </>
  );
};

ModalImage.propTypes = {
  ...PhotoOpen.propTypes,
};
