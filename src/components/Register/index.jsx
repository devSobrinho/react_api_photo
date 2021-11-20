import P from 'prop-types';
import { useState } from 'react';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { IoReturnUpBack } from 'react-icons/io5';

import * as Styled from './styles';

import { emailValidation } from '../../services/validations/emailInput';
import { passwordValidation } from '../../services/validations/passwordInput';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Button } from '../Button';
import { useEffect } from 'react';

export const Register = ({
  textHeading,
  textButton,
  methodForm,
  actionForm,
  textNextButton,
}) => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [handleClick, setHandleClick] = useState(false);

  const nextInputForm = (e) => {
    e.preventDefault();

    let flagForm = true;

    if (!emailValidation(email)) {
      toast.error('E-mail inválido');
      setEmailValid((p) => true);
      flagForm = false;
    } else {
      setEmailValid((p) => false);
    }

    if (!passwordValidation(password)) {
      toast.error('Senha precisa ter 6 e 32 caracteres');
      setPasswordValid((p) => true);
      flagForm = false;
    } else {
      setPasswordValid((p) => false);
    }

    if (!flagForm) return;

    setHandleClick((v) => !v);
  };

  return (
    <Styled.Container>
      <Styled.ReturnIcon>
        <IoReturnUpBack size="2rem" />
      </Styled.ReturnIcon>
      <Styled.Form method={methodForm} action={actionForm}>
        <Heading as="h1">{textHeading}</Heading>
        <Styled.ContainerNext hidden={handleClick}>
          <Input type="email" valueInput={setEmail} validStyled={!emailValid} />
          <Input
            type="password"
            valueInput={setPassword}
            validStyled={!passwordValid}
          />
          <Button text={textNextButton} onClick={nextInputForm} invertStyled />
        </Styled.ContainerNext>
        <Styled.ContainerNext hidden={!handleClick}>
          <Input type="name" valueInput={setName} validStyled={!nameValid} />
          <Button text={textButton} invertStyled />
        </Styled.ContainerNext>
      </Styled.Form>
    </Styled.Container>
  );
};

Register.propTypes = {
  textHeading: Heading.propTypes.children,
  textButton: Button.propTypes.text,
  textNextButton: P.string,
  methodForm: P.oneOf(['post', 'get']).isRequired,
  actionForm: P.oneOf(['register']).isRequired,
};
