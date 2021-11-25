import { ButtonsProfileCard } from '.';
import mock from './mock';

export default {
  title: 'ButtonsProfileCard',
  component: ButtonsProfileCard,
  args: {
    userName: 'Jane',
    ...mock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ButtonsProfileCard {...args} />
    </div>
  );
};
