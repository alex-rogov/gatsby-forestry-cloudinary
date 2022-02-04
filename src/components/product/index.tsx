import * as React from 'react';
import type { NavLink } from 'types';
import { Wrapper, Main, Title, Content, ImageContent } from './index.style';

export type Props = {
  title: string;
  content: string;
  image: NavLink;
};

const Product: React.FC<Props> = ({ title, content, image: { href, src: Src } }) => (
  <Wrapper>
    <Main>
      {title && <Title>{title}</Title>}
      {content && <Content>{content}</Content>}
      {/* TODO: conditional render if its svg or image */}
      <ImageContent href={href}>{<Src />}</ImageContent>
    </Main>
  </Wrapper>
);

export default Product;
