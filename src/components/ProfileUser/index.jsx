import P from 'prop-types';
import { useEffect, useState } from 'react';

import * as Styled from './styles';
import { ProfileCardInfo } from '../ProfileCardInfo';
import { ButtonsProfileCard } from '../ButtonsProfileCard';
import { GridPosts } from '../GridPosts';
import { Button } from '../Button';
import { Menu } from '../Menu';

export const ProfileUser = ({ user }) => {
  const { name, userPhoto, userLocalization, posts } = user;
  return (
    <>
      <Styled.Container>
        <ProfileCardInfo
          userPhoto={userPhoto}
          userName={name}
          userLocalization={userLocalization}
        />
        <ButtonsProfileCard
          textFollow="follow"
          textMessage="message"
          userName={name}
        />
        <GridPosts posts={posts} />
        <Styled.Link hiddenSeeMore={posts.nextPosts}>
          <Button
            text="see more"
            onClick={() => {
              console.log('dispatch AQUI');
            }}
          />
        </Styled.Link>
        <Styled.Menu>
          <Menu />
        </Styled.Menu>
      </Styled.Container>
    </>
  );
};

ProfileUser.propTypes = {
  user: P.shape({
    posts: GridPosts.propTypes.posts,
    userPhoto: ProfileCardInfo.propTypes.userPhoto,
    name: ProfileCardInfo.propTypes.userName,
    userLocalization: ProfileCardInfo.propTypes.userLocalization,
  }).isRequired,
  // user: P.shape(GridPosts.propTypes, ProfileCardInfo.propTypes).isRequired,
};
