import styled from '@emotion/styled';
import { Card, css, Text, Link, Flex } from 'theme-ui';

export const Wrapper = styled(Card)(
  css({
    minWidth: 'productCard.width',
    minHeight: 'productCard.height',
    maxWidth: 376,
    py: 'l',
    px: 's',
  }),
);

export const Main = styled(Flex)(css({ height: '100%', flexDirection: 'column' }));

export const Title = styled(Text)(
  css({
    mb: 'xs',
    letterSpacing: 'regularS',
  }),
);

Title.defaultProps = {
  variant: 'h3',
};

export const Content = styled(Text)(css({ flex: '1 0  auto', mt: 'xxs' }));

Content.defaultProps = {
  variant: 'bodyS',
};

export const ImageContent = styled(Link)(
  css({
    filter: ({ colors }) => colors && colors.imageFilter,
    flex: '0 1 auto',
    '& > *': {
      height: 56,
    },
  }),
);
