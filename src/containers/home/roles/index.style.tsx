import styled from '@emotion/styled';
import { Box, css, Flex, Image, Text } from 'theme-ui';
import Button from 'components/ui/button';
import type { LinkProps } from 'theme-ui';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: ['column', null, null, 'row'],
    alignItems: 'flex-start',
    ml: [null, null, 'xl'],
    mr: [null, null, 'l'],
    gap: (t) => t.space.m + t.space.xxs,
  }),
);

export const StyledImage = styled(Image)(
  css({
    flex: 0.5,
  }),
);

export const Main = styled(Flex)(
  css({
    flexDirection: 'column',
    flex: 0.52,
    maxWidth: 1050,
    pl: ['s', null, 'none'],
    pr: ['xs', null, 'none'],
  }),
);

export const Title = styled(Text)(css({ mb: 'm', fontWeight: 'light' }));

Title.defaultProps = {
  variant: 'h1',
  as: 'h1',
};

export const WrapperDescription = styled(Box)(
  css({
    mx: [null, null, 'l'],
    pl: 's',
    pr: 'xxs',
    mb: 'm',
    borderLeft: '1px solid',
    borderColor: 'primary',
  }),
);

export const Description = styled(Text)(css({}));

Description.defaultProps = {
  variant: 'body',
};

export const StyledButton = styled(Button)<LinkProps>(
  css({
    //TODO: place in theme
    maxWidth: 260,
    mt: [null, null, 'xxs'],
    mx: [null, null, 'xl'],
    mr: '10%',
  }),
);

StyledButton.defaultProps = {
  as: 'a',
};
