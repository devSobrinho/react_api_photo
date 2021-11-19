import { ProfileInfo } from '.';
import mock from './mock';

export default {
  title: 'ProfileInfo',
  component: ProfileInfo,
  args: {
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <ProfileInfo {...args} />
    </div>
  );
};
