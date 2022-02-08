import styled from '@emotion/styled';
import { Box, css, Flex, Text } from 'theme-ui';
import Button from 'components/ui/button';
import type { LinkProps } from 'theme-ui';
import linePattern from 'assets/images/general/line-pattern.png';

// TODO use either svg or repeating-linear-gradient
export const Wrapper = styled(Flex)(
  css({
    backgroundImage: [null, null, `url(${linePattern})`],
    backgroundSize: 'cover',
    backgroundPosition: [null, null, '100% 60%', '100% 68%'],
    backgroundRepeat: 'no-repeat',
    flexDirection: 'column',
    alignItems: 'center',
    px: [null, null, 'xl'],
  }),
);

export const Main = styled(Flex)(
  css({
    flexDirection: 'column',
    maxWidth: 1055,
    gap: 'm',
    mx: ['s', null, null, 'xl'],
    px: [null, null, null, 'l'],
  }),
);

export const Title = styled(Text)(css({ fontWeight: 'light' }));

Title.defaultProps = {
  variant: 'h1',
  as: 'h1',
};

export const WrapperDescription = styled(Box)(
  css({
    mx: [null, null, 'm'],
    pl: ['s', null],
    pr: ['xs', null, 'l'],
    borderLeft: '1px solid',
    borderColor: 'primary',
  }),
);

export const Description = styled(Text)(css({}));

Description.defaultProps = {
  variant: 'bodyL',
};

export const StyledButton = styled(Button)<LinkProps>(
  css({
    maxWidth: 188,
    ml: ['s', 'xl'],
    mr: ['24%', 'none'],
  }),
);

StyledButton.defaultProps = {
  as: 'a',
};
