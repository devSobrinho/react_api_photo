import { MenuLink } from '.';
import mock from './mock';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    colorWhite: true,
    ...mock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
