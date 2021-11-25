import { GridPosts } from '.';
import mock from './mock';

export default {
  title: 'GridPosts',
  component: GridPosts,
  args: {
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridPosts {...args} />
    </div>
  );
};
