import { ImageProfile } from '.';
import mock from './mock';

export default {
  title: 'ImageProfile',
  component: ImageProfile,
  args: {
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <ImageProfile {...args} />
    </div>
  );
};
