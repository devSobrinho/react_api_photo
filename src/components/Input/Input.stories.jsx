import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'email',
    valueInput: () => {},
  },
};

export const Template = (args) => {
  return (
    <div>
      <Input {...args} />
    </div>
  );
};
