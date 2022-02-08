import { css, Flex, Box, Text, Grid } from 'theme-ui';
import styled from '@emotion/styled';
import { Wrapper as EmailWrapper } from 'components/email-form/index.style';

export const StyledFooter = styled(Box)(
  css({
    pt: 'xl',
    pb: ['xl', 'l', 'xl'],
    px: ['s', null, 'xl'],
  }),
);

StyledFooter.defaultProps = {
  as: 'footer',
  variant: 'layout.footer',
};

export const Wrapper = styled(Flex)(
  css({
    flexDirection: ['column', null, 'row'],
    flexWrap: 'wrap',
    justifyContent: ['flex-start', null, 'space-between'],
    gap: [null, null, 'xl'],
    pt: [null, 's'],
    pb: [null, null, 's'],
    px: [null, null, 'xs'],
    [EmailWrapper.toString()]: {
      flex: 0.4,
    },
  }),
);

export const WrapperNav = styled(Grid)(
  css({
    flex: 0.7,
    columnGap: ['xs', 'l', 'xl'],
    rowGap: 'l',
    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
    my: ['xl', null, 'none'],
  }),
);

export const Copyright = styled(Text)(
  css({
    flex: '1 0 100%',
    color: 'gray3',
    fontSize: 'bodyS',
  }),
);
