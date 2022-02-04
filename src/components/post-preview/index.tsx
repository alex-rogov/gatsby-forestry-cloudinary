import * as React from 'react';
import { Image } from 'theme-ui';
import type { NavLink } from 'types';
import { Wrapper, Main, Title, Content, ImageContent } from './index.style';

export type Props = {
  title: string;
  content: string;
  image: NavLink;
};

const PostPreview: React.FC<Props> = ({ title, content, image: { href, src } }) => (
  <Wrapper>
    <Main>
      {title && <Title>{title}</Title>}
      {content && <Content>{content}</Content>}
      <ImageContent href={href}>{<Image src={src} />}</ImageContent>
    </Main>
  </Wrapper>
);

export default PostPreview;
