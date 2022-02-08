import styled from '@emotion/styled';
import { css, Flex, Grid, Text } from 'theme-ui';
import Button from 'components/ui/button';
import { Wrapper as PostPreviewWrapper } from 'components/post-preview/index.style';
import type { LinkProps } from 'theme-ui';

export const Wrapper = styled(Grid)(
  css({
    gridTemplateAreas: [
      `'title'
      'content'
      'button'`,
      `'title button'
      'content content'`,
    ],
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    mx: ['s', null, 'xl'],
  }),
);

export const WrapperTitle = styled(Flex)(css({}));

export const Title = styled(Text)(css({ gridArea: 'title', mb: 's', fontWeight: 'light' }));

Title.defaultProps = {
  variant: 'h1',
  as: 'h1',
};

export const LinkAllPosts = styled(Button)<LinkProps>(
  css({
    gridArea: 'button',
    alignSelf: 'baseline',
    justifySelf: ['left', 'right'],
    p: ['none', 'xs'],
    my: ['l', 'none'],
    maxWidth: 268,
  }),
);

LinkAllPosts.defaultProps = {
  variant: 'link',
  as: 'a',
};

export const WrapperPosts = styled(Flex)(
  css({
    gridArea: 'content',
    mt: 'xxs',
    //TODO resolve against types of theme
    gap: (t) => t.space.xxs + t.space.s,
    '& > *': {
      flex: 1,
    },
    [`${PostPreviewWrapper.toString()}:not(:first-of-type)`]: {
      display: ['none', 'block'],
    },
  }),
);
