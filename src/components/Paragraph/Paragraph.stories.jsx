import { Paragraph } from '.';

export default {
  title: 'Paragraph',
  component: Paragraph,
  args: {
    text: 'devSobrinho',
    size: 'small',
    lineHeight: 'small',
    weight: 'bolder',
  },
  argTypes: {
    text: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Paragraph {...args} />
    </div>
  );
};
