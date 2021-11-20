import P from 'prop-types';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Button } from '../Button';

import * as Styled from './styles';
import { useState } from 'react';

export const Login = ({ textHeading, textButton, methodForm, actionForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(`email: ${email}  |  password: ${password} `);

  return (
    <Styled.Container>
      <Styled.Form method={methodForm} action={actionForm}>
        <Heading as="h1">{textHeading}</Heading>
        <Input type="email" valueInput={setEmail} />
        <Input type="password" valueInput={setPassword} />
        <Button text={textButton} invertStyled />
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
