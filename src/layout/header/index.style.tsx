import styled from '@emotion/styled';
import { Flex, css, Box } from 'theme-ui';
import VShapeLogo from 'assets/images/logos/v-shape.svg';

export const StyledHeader = styled(Box)(
  css({
    position: 'absolute',
    left: 0,
    right: 0,
    my: ['s', 'l'],
    mx: ['s', null, 'l'],
  }),
);

StyledHeader.defaultProps = {
  as: 'header',
  variant: 'layout.header',
};

export const Wrapper = styled(Flex)(
  css({
    alignItems: 'center',
    my: ['xxs', 'none'],
    gap: 's',
  }),
);

export const Icon = styled.svg(
  css({
    maxWidth: 32,
  }),
);

export const Logo = styled(VShapeLogo)(
  css({
    width: [32, 56],
  }),
);
