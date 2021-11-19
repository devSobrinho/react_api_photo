import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Log in',
    size: 'medium',
    lineHeight: 'medium',
    weight: 'bolder',
  },
};

export const Template = (args) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button {...args} />
        <Button {...args} invertStyled text="register" />
      </div>
      <Button {...args} invertStyled text="Next" />
    </div>
  );
};
