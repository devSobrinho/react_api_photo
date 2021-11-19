import P from 'prop-types';

import * as Styled from './styles';

export const ImageProfile = ({ imgSrc = '', size }) => {
  return (
    <>
      <Styled.ContainerImage imgSrc={imgSrc} size={size}>
        <img src={imgSrc} alt="Image Profile" />
      </Styled.ContainerImage>
    </>
  );
};

ImageProfile.propTypes = {
  size: P.oneOf(['small', 'medium', 'large']).isRequired,
  imgSrc: P.string,
};
