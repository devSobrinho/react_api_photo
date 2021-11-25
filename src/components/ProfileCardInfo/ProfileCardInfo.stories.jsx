import { ProfileCardInfo } from '.';
import mock from './mock';

export default {
  title: 'ProfileCardInfo',
  component: ProfileCardInfo,
  args: {
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <ProfileCardInfo {...args} />
    </div>
  );
};
