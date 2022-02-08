import styled from '@emotion/styled';
import { Card, css, Text, Link, Flex } from 'theme-ui';

export const Main = styled(Flex)(
  css({
    height: '100%',
    flexDirection: 'column',
    px: [null, null, 'xs'],
  }),
);
export const Wrapper = styled(Card)(
  css({
    minHeight: 576,
    py: 'l',
    px: 's',
    // TODO conflicts with overflow: scroll
    // '&:hover': {
    //   transform: 'scale(1.03)',

    //   [Main.toString()]: {
    //     transform: `scale(${1 / 1.03})`,
    //   },
    // },
  }),
);

export const Title = styled(Text)(
  css({
    fontWeight: 'bold',
    mb: 'xs',
  }),
);

Title.defaultProps = {
  variant: 'h2',
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
      maxHeight: 48,
    },
  }),
);
