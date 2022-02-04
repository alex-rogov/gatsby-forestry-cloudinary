import styled from '@emotion/styled';
import { Box, css, Flex, Image, Text } from 'theme-ui';
import Button from 'components/ui/button';
import type { LinkProps } from 'theme-ui';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: ['column', 'column', 'row'],
    alignItems: 'flex-start',
    mx: [null, null, 'xl'],
    mt: ['s', null, 'xl'],
    mb: 'l',
    gap: 'm',
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
    flex: 0.7,
    maxWidth: 1050,
    px: ['s', null],
  }),
);

export const Title = styled(Text)(css({ mb: 'm' }));

Title.defaultProps = {
  variant: 'h2',
  as: 'h2',
};

export const WrapperDescription = styled(Box)(
  css({
    mx: [null, null, 'l'],
    px: 's',
    mb: 'm',
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
  variant: 'bodyParagraphS',
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
