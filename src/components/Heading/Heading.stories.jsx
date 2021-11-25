import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    text: 'Register',
    as: 'h1',
  },
  // argTypes: {
  //   text: { type: 'string' },
  //   as: { type: 'string' },
  // },
};

export const Template = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
