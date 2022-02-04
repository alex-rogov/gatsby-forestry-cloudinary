import * as React from 'react';
import styled from '@emotion/styled';
import { css, Flex, Text } from 'theme-ui';
import Button from 'components/ui/button';
import { Wrapper as PostPreviewWrapper } from 'components/post-preview/index.style';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: ['column', 'row'],
    mx: ['s', null, 'xl'],
    mt: ['s', null, 'xl'],
    mb: ['l', 'xxl'],
    gap: 'm',
  }),
);

export const Main = styled(Flex)(
  css({
    flex: 0.35,
    flexDirection: 'column',
    mt: 'm',
  }),
);

export const Title = styled(Text)(css({ mb: 'xs' }));

Title.defaultProps = {
  variant: 'h2',
  as: 'h2',
};

export const ButtonAllPosts = styled(Button)(css({ mt: 'xs', maxWidth: 268 }));

export const WrapperPosts = styled(Flex)(
  css({
    flex: 0.7,
    gap: 's',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    [PostPreviewWrapper.toString()]: {
      minWidth: [293, 376],
      flex: 1,
    },
  }),
);
