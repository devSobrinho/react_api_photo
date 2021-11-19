import { HomeComponent } from '.';
import mock from './mock';

export default {
  title: 'HomeComponent',
  component: HomeComponent,
  args: {
    ...mock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <HomeComponent {...args} />
    </div>
  );
};
