import * as React from 'react';
import PostPreview from 'components/post-preview';
import type { Props as PostProps } from 'components/post-preview/index';
import { Wrapper, Title, LinkAllPosts, WrapperPosts } from './index.style';

type Props = {
  title: string;
  button: { url: string; text: string };
  posts: PostProps[];
};

export const Posts: React.FC<Props> = ({ title, button: { url, text }, posts }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    <LinkAllPosts href={url} arrowSize="s">
      {text}
    </LinkAllPosts>
    {posts && (
      <WrapperPosts>
        {posts?.map((props) => (
          <PostPreview key={props.title} {...props} />
        ))}
      </WrapperPosts>
    )}
  </Wrapper>
);
