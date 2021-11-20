import { PhotoOpen } from '.';
import mock from './mock';

export default {
  title: 'PhotoOpen',
  component: PhotoOpen,
  args: {
    imgSrc: 'https://source.unsplash.com/random/500x800?r=2',
    userInfo: { ...mock },
  },
};

export const Template = (args) => {
  return (
    <div>
      <PhotoOpen {...args} />
    </div>
  );
};
