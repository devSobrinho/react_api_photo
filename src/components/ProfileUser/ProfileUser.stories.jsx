import { ProfileUser } from '.';
import mockProfile from '../ProfileCardInfo/mock';
import mockButtons from '../ButtonsProfileCard/mock';
import mockPosts from '../GridPosts/mock';
import mockMenu from '../Menu/mock';

export default {
  title: 'ProfileUser',
  component: ProfileUser,
  args: {
    user: {
      profileCardInfo: { ...mockProfile },
      posts: mockPosts.posts,
      name: 'James',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ProfileUser {...args} />
    </div>
  );
};
