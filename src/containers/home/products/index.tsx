import * as React from 'react';
import Product from 'components/product';
import type { Props as ProductProps } from 'components/product';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Wrapper,
  Title,
  Description,
  ButtonAllProducts,
  ProductsCarousel,
  WrapperProducts,
  Main,
  ArrowLeft,
  ArrowRight,
} from './index.style';

type Props = {
  title: string;
  description: string;
  button: { url: string; text: string };
};

export const Products: React.FC<Props> = ({ title, description, button: { url, text } }) => {
  // TODO: resolve types
  const { allProducts } = useStaticQuery(graphql`
    query {
      allProducts {
        childMarkdownRemark {
          frontmatter {
            title
            description
            logo
          }
        }
      }
    }
  `);

  const products: ProductProps[] = allProducts.map(
    ({ childMarkdownRemark }) => childMarkdownRemark.frontmatter,
  );

  // TODO move to carousel component
  const carousel = React.useRef<HTMLDivElement>();
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const touchHandler = () => {
    if (carousel?.current) {
      const SCROLL_OFFSET = 32;
      const { left, width } = carousel.current.getBoundingClientRect();
      const scrollMaxWidth = width - left - SCROLL_OFFSET;
      const scrollPosition = carousel.current.scrollLeft;

      setShowLeftArrow(scrollPosition >= SCROLL_OFFSET);
      setShowRightArrow(scrollPosition <= scrollMaxWidth);
    }
  };

  React.useEffect(() => {
    const carouselElement = carousel.current;
    carouselElement?.addEventListener('touchmove', touchHandler);
    return () => carouselElement?.removeEventListener('touchmove', touchHandler);
  });

  return (
    <Wrapper>
      <Main>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        <ButtonAllProducts arrowSize="s">{text}</ButtonAllProducts>
      </Main>
      {products && (
        <ProductsCarousel>
          {showLeftArrow && <ArrowLeft arrowSize="s" arrowReversed />}
          {showRightArrow && <ArrowRight arrowSize="s" />}
          <WrapperProducts ref={carousel}>
            {products?.map((props) => (
              <Product key={props.title} {...props} />
            ))}
          </WrapperProducts>
        </ProductsCarousel>
      )}
    </Wrapper>
  );
};
