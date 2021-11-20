import { Register } from '.';
import mock from './mock';

export default {
  title: 'Register',
  component: Register,
  args: {
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Register {...args} />
    </div>
  );
};
