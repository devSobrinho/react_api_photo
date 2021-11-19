import P from 'prop-types';

import * as Styled from './styles';

export const Input = ({ type }) => {
  const placeholderFn = (type) => {
    if (type === 'email') {
      return 'yourEmail@example.com';
    }
    if (type === 'password') {
      return 'Insert your password';
    }
    if (type === 'text') {
      return 'Search all photos';
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.Input
          type={type}
          placeholder={placeholderFn(type)}
          maxLength={64}
        ></Styled.Input>
      </Styled.Container>
    </>
  );
};

Input.propTypes = {
  type: P.oneOf(['email', 'password', 'text']),
};
