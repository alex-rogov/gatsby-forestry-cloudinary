import styled from '@emotion/styled';
import { Box, css, Flex, Text } from 'theme-ui';
import Button from 'components/ui/button';
import type { LinkProps } from 'theme-ui';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    alignItems: 'center',
    mx: ['s', null, 'xl'],
    mt: ['s', null, 'xl'],
    mb: ['l', 'xxl'],
    gap: 'm',
  }),
);

export const Main = styled(Flex)(
  css({
    flexDirection: 'column',
    //TODO: put into theme
    maxWidth: 1015,
    px: [null, null, 'l'],
  }),
);

export const Title = styled(Text)(css({ mb: 'm' }));

Title.defaultProps = {
  variant: 'h2',
  as: 'h2',
};

export const WrapperDescription = styled(Box)(
  css({
    mx: [null, 'l'],
    pl: 's',
    mb: ['m', 'xs'],
    borderLeft: '1px solid',
    borderColor: 'primary',
  }),
);

export const Description = styled(Text)(
  css({
    fontSize: [null, 'bodyL'],
  }),
);

Description.defaultProps = {
  variant: 'bodyParagraph',
};

export const StyledButton = styled(Button)<LinkProps>(
  css({
    //TODO: put into theme
    maxWidth: 210,
    mt: [null, 'xxs'],
    ml: ['s', 'xl'],
    mr: ['24%', 'none'],
  }),
);

StyledButton.defaultProps = {
  as: 'a',
};
