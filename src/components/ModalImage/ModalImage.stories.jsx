import { ModalImage } from '.';
import mock from '../PhotoOpen/mock';

export default {
  title: 'ModalImage',
  component: ModalImage,
  args: {
    modalPhoto: true,
    imgSrc: 'https://source.unsplash.com/random/500x800?r=2',
    userInfo: { ...mock },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ModalImage {...args} />
    </div>
  );
};
