import styled from '@emotion/styled';
import type { LinkProps } from 'theme-ui';
import { Flex, css, Text, Divider } from 'theme-ui';
import type { Props } from '.';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: 'column',
  }),
);

export const Title = styled(Text)(
  css({
    mb: 'xxs',
    color: '#111B22',
  }),
);

Title.defaultProps = {
  variant: 'h6',
};

export const LinkItem = styled(Text)<LinkProps>(
  css({
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 'looseS',
  }),
);

LinkItem.defaultProps = {
  as: 'a',
  variant: 'h7',
};

export const NavDivider = styled(Divider)<Props>(css({}), ({ noDivider }) =>
  css({
    visibility: noDivider && 'hidden',
  }),
);

export const WrapperLinks = styled(Flex)(
  css({
    flexDirection: 'column',
    mt: 'xs',
    gap: 'xs',
  }),
);

WrapperLinks.defaultProps = {
  as: 'ul',
};

export const WrapperImages = styled(Flex)(
  css({
    flexWrap: 'wrap',
    gap: 's',
    '& > *': {
      maxHeight: 22,
    },
  }),
);
