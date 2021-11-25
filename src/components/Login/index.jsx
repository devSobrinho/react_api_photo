import P from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoReturnUpBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import * as Styled from './styles';

import * as actions from '../../store/modules/auth/actions';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Button } from '../Button';
import { emailValidation } from '../../services/validations/emailInput';
import { passwordValidation } from '../../services/validations/passwordInput';

export const Login = ({
  textHeading,
  textButton,
  methodForm,
  actionForm,
  location,
  history,
}) => {
  const dispatch = useDispatch();

  const prevPath = get(location, 'state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const formValidation = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!emailValidation(email)) {
      toast.error('E-mail inválido');
      setEmailValid((p) => true);
      formErrors = true;
    } else {
      setEmailValid((p) => false);
    }

    if (!passwordValidation(password)) {
      toast.error('Senha precisa ter 6 e 32 caracteres');
      setPasswordValid((p) => true);
      formErrors = true;
    } else {
      setPasswordValid((p) => false);
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, history, prevPath }));
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
        onSubmit={formValidation}
      >
        <Heading as="h1" text={textHeading} />
        <Input type="email" valueInput={setEmail} validStyled={!emailValid} />
        <Input
          type="password"
          valueInput={setPassword}
          validStyled={!passwordValid}
        />
        <Button text={textButton} invertStyled />
      </Styled.Form>
    </Styled.Container>
  );
};

Login.propTypes = {
  history: P.shape().isRequired,
  location: P.shape().isRequired,
  textHeading: Heading.propTypes.text,
  textButton: Button.propTypes.text,
  methodForm: P.oneOf(['post', 'get']).isRequired,
  actionForm: P.oneOf(['login']).isRequired,
};
