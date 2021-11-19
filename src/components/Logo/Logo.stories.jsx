import { Logo } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    children: 'Photo',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  );
};
