import P from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoReturnUpBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import * as Styled from './styles';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Button } from '../Button';
import { emailValidation } from '../../services/validations/emailInput';
import { passwordValidation } from '../../services/validations/passwordInput';

export const Login = ({ textHeading, textButton, methodForm, actionForm }) => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  console.log(`email: ${email}  |  password: ${password} `);

  const formValidation = (e) => {
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

    e.returnValue = true;
  };

  return (
    <Styled.Container>
      <Link to="/">
        <Styled.ReturnIcon>
          <IoReturnUpBack size="2rem" color="black" />
        </Styled.ReturnIcon>
      </Link>
      <Styled.Form method={methodForm} action={actionForm}>
        <Heading as="h1">{textHeading}</Heading>
        <Input type="email" valueInput={setEmail} validStyled={!emailValid} />
        <Input
          type="password"
          valueInput={setPassword}
          validStyled={!passwordValid}
        />
        <Button text={textButton} onClick={formValidation} invertStyled />
      </Styled.Form>
    </Styled.Container>
  );
};

Login.propTypes = {
  textHeading: Heading.propTypes.children,
  textButton: Button.propTypes.text,
  methodForm: P.oneOf(['post', 'get']).isRequired,
  actionForm: P.oneOf(['login']).isRequired,
};
