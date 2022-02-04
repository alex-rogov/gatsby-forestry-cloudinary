import * as React from 'react';
import Product from 'components/product';
import type { Props as ProductProps } from 'components/product';
import { Wrapper, Title, Description, ButtonAllProducts, WrapperProducts, Main } from './index.style';

type Props = {
  title: string;
  description: string;
  button: { url: string; text: string };
  products: ProductProps[];
};

export const Products: React.FC<Props> = ({ title, description, button: { url, text }, products }) => (
  <Wrapper>
    <Main>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      <ButtonAllProducts withArrow>{text}</ButtonAllProducts>
    </Main>
    {products && (
      <WrapperProducts>
        {products?.map((props) => (
          <Product {...props} />
        ))}
      </WrapperProducts>
    )}
  </Wrapper>
);
