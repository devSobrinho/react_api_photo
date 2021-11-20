import { Login as LoginComponent } from '../../components/Login';
import mock from '../../components/Login/mock';

import * as Styled from './styles';

function Login() {
  return <LoginComponent {...mock} />;
}

export default Login;
