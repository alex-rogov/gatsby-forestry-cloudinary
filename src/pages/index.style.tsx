import styled from '@emotion/styled';
import { css, Flex } from 'theme-ui';
import { Wrapper as AboutUsWrapper } from 'containers/home/about-us/index.style';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    '& > *': {
      py: (t) => [t.space.l, t.space.xl],
    },
    '& > :last-child': {
      mb: (t) => [t.space.s, t.space.l + t.space.m, t.space.xl + t.space.l],
    },
    [`${AboutUsWrapper.toString()}:not(:first-of-type)`]: {
      pt: (t) => t.space.l + t.space.m,
      pb: 'l',
    },
  }),
);
