import P from 'prop-types';

import * as Styled from './styles';
import { Register as RegisterComponent } from '../../components/Register';
import mock from '../../components/Register/mock';

function Register() {
  return (
    <>
      <RegisterComponent {...mock} />
    </>
  );
}

export default Register;
