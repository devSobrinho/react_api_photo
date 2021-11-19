import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
};

export const Template = (args) => {
  return (
    <div>
      <Input {...args} />
    </div>
  );
};
