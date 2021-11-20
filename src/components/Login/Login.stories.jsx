import { Login } from '.';
import { loginMock } from './mock';

export default {
  title: 'Login',
  component: Login,
  args: {
    valueInput: () => {},
    ...loginMock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Login {...args} />
    </div>
  );
};
