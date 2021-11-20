import P from 'prop-types';
import { useRef } from 'react';

import { emailValidation } from '../../services/validations/emailInput';
import * as Styled from './styles';

export const Input = ({ type, valueInput, validStyled = false }) => {
  const input = useRef();

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
    if (type === 'name') {
      return 'Insert your name';
    }
  };

  const typeInput = () => {
    return type === 'name' ? 'text' : type;
  };

  return (
    <>
      <Styled.Container htmlFor={type}>
        <Styled.Input
          ref={input}
          type={typeInput()}
          placeholder={placeholderFn(type)}
          maxLength={64}
          id={type}
          name={type}
          onChange={(e) => {
            valueInput((v) => e.target.value);
          }}
          validStyled={validStyled}
        ></Styled.Input>
      </Styled.Container>
    </>
  );
};

Input.propTypes = {
  type: P.oneOf(['email', 'password', 'text', 'name']).isRequired,
  valueInput: P.func.isRequired,
  validStyled: P.bool,
};
