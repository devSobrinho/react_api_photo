import { ModalImage } from '.';
import mock from '../PhotoOpen/mock';

export default {
  title: 'ModalImage',
  component: ModalImage,
  args: {
    userInfo: { ...mock },
    imgSrc: 'https://source.unsplash.com/random/800x800?r=2',
  },
};

export const Template = (args) => {
  return (
    <div>
      <ModalImage {...args} />
    </div>
  );
};
