import * as React from 'react';
import { Image } from 'theme-ui';
import type { NavLink } from 'types';
import { Wrapper, Main, Title, Content, ImageContent, Information, InformationItem } from './index.style';

export type Props = {
  title: string;
  tag: string;
  minutesToRead: number;
  content: string;
  image: NavLink;
};

const PostPreview: React.FC<Props> = ({ title, tag, minutesToRead, content, image: { href, src } }) => (
  <Wrapper>
    <ImageContent href={href}>
      <Image src={src} />
    </ImageContent>
    {(tag || minutesToRead) && (
      <Information>
        {tag && <InformationItem>{tag}</InformationItem>}
        {minutesToRead && <InformationItem>{minutesToRead} minute read</InformationItem>}
      </Information>
    )}
    <Main>
      {title && <Title>{title}</Title>}
      {content && <Content>{content}</Content>}
    </Main>
  </Wrapper>
);

export default PostPreview;
