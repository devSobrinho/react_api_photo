import P from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoReturnUpBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import * as Styled from './styles';

import * as actions from '../../store/modules/auth/actions';
import { emailValidation } from '../../services/validations/emailInput';
import { passwordValidation } from '../../services/validations/passwordInput';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Button } from '../Button';

export const Register = (
  { textHeading, textButton, methodForm, actionForm, textNextButton },
  props,
) => {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');
  const history = get(props, 'history');

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [handleClick, setHandleClick] = useState(false);

  const nextInputForm = (e) => {
    e.preventDefault();

    let flagErrors = false;

    if (!emailValidation(email)) {
      toast.error('E-mail inválido');
      setEmailValid((p) => true);
      flagErrors = true;
    } else {
      setEmailValid((p) => false);
    }

    if (!passwordValidation(password)) {
      toast.error('Senha precisa ter 6 e 32 caracteres');
      setPasswordValid((p) => true);
      flagErrors = true;
    } else {
      setPasswordValid((p) => false);
    }

    if (flagErrors) return;

    setHandleClick((p) => !p);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return;
    }

    dispatch(actions.registerRequest({ email, password, name }));
  };

  return (
    <Styled.Container>
      <Link to="/">
        <Styled.ReturnIcon>
          <IoReturnUpBack size="2rem" color="black" />
        </Styled.ReturnIcon>
      </Link>
      <Styled.Form
        method={methodForm}
        action={actionForm}
        onSubmit={hadleSubmit}
      >
        <Heading as="h1" text={textHeading} />
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
  props: P.any.isRequired,
  textHeading: Heading.propTypes.text,
  textButton: Button.propTypes.text,
  textNextButton: P.string,
  methodForm: P.oneOf(['post', 'get']).isRequired,
  actionForm: P.oneOf(['register']).isRequired,
};
