import styled from '@emotion/styled';
import { css, Flex, Text } from 'theme-ui';
import Button from 'components/ui/button';
import { Wrapper as ProductWrapper } from 'components/product/index.style';
import type { LinkProps } from 'theme-ui';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: ['column', 'row'],
    ml: ['s', null, 'xl'],
    gap: 'm',
  }),
);

export const Main = styled(Flex)(
  css({
    flex: 0.3,
    flexDirection: 'column',
    pr: 's',
  }),
);

export const Title = styled(Text)(css({ mb: 'xs', fontWeight: 'light' }));

Title.defaultProps = {
  variant: 'h1',
  as: 'h1',
};

export const Description = styled(Text)(
  css({
    mt: 'xxs',
    mb: 's',
  }),
);

Description.defaultProps = {
  variant: 'bodyS',
};

export const ButtonAllProducts = styled(Button)<LinkProps>(css({ mt: 'xs', maxWidth: 222 }));

ButtonAllProducts.defaultProps = {
  as: 'a',
};

const CarouselArrowStyles = {
  variant: 'buttons.round',
  boxSizing: 'content-box',
  zIndex: 1,
  position: 'absolute',
  borderRadius: '100px 0 0 100px',
  top: '50%',
  transform: 'translateY(-50%)',
  py: 'xs',
} as const;

export const ArrowLeft = styled(Button)(
  css({
    ...CarouselArrowStyles,
    left: 0,
    borderRadius: '0 100px 100px 0',
    '&:hover': {
      pl: 'xs',
    },
  }),
);

export const ArrowRight = styled(Button)(
  css({
    ...CarouselArrowStyles,
    right: 0,
    borderRadius: '100px 0 0 100px',
    '&:hover': {
      pr: 'xs',
    },
  }),
);

export const ProductsCarousel = styled(Flex)(
  css({
    flex: 0.7,
    position: 'relative',
  }),
);

export const WrapperProducts = styled(Flex)(
  css({
    gap: 's',
    px: ['s', 'none'],
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    overflowX: 'scroll',
    [ProductWrapper.toString()]: {
      minWidth: [293, 376],
      flex: 1,
    },
  }),
);
