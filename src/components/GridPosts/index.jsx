import P from 'prop-types';
import { useEffect, useState } from 'react';

import * as Styled from './styles';

export const GridPosts = ({ posts = {} }) => {
  const [postsState, setPostsState] = useState([]);
  // const [qtdPosts, setQtdPosts] = useState(0);

  useEffect(() => {
    setPostsState((p) => posts);
    // setQtdPosts((p) => posts.post.length);
    console.log('re-render');
  }, [posts]);

  console.log('postsState', postsState.post);
  // console.log('qtdPosts', qtdPosts);

  if (postsState.post?.length > 0) {
    return (
      <Styled.Container>
        {postsState.post.map((post, index) => {
          return (
            <Styled.Image key={index}>
              <img key={index} src={post.imgUrl} />
            </Styled.Image>
          );
        })}
      </Styled.Container>
    );
  } else {
    return <h1>Não há Posts</h1>;
  }
};

GridPosts.propTypes = {
  posts: P.shape({
    nextPosts: P.bool.isRequired,
    post: P.arrayOf(P.shape({ imgUrl: P.string.isRequired }).isRequired),
  }),
};
