import * as React from 'react';
import { Image } from 'theme-ui';
import { Wrapper, Main, Title, Content, ImageContent } from './index.style';

export type Props = {
  title: string;
  description: string;
  logo: string;
};

const Product: React.FC<Props> = ({ title, description, logo }) => (
  <Wrapper>
    <Main>
      {title && <Title>{title}</Title>}
      {description && <Content>{description}</Content>}
      <ImageContent>
        <Image src={logo} />
      </ImageContent>
    </Main>
  </Wrapper>
);

export default Product;
