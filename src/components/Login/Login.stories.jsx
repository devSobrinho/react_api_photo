import { Login } from '.';
import mock from './mock';

export default {
  title: 'Login',
  component: Login,
  args: {
    valueInput: () => {},
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Login {...args} />
    </div>
  );
};
