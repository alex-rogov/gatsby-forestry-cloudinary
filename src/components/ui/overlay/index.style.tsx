import styled from '@emotion/styled';
import { css, Flex } from 'theme-ui';
import { Wrapper as NavItemWrapper, Title, WrapperLinks } from 'components/nav-item/index.style';

export const Wrapper = styled(Flex)(
  css({
    position: 'fixed',
    inset: 0,
    bg: 'white',
    px: ['s', null, 'xl'],
    pt: 'xl',
    flexDirection: ['column', 'row'],
    gap: 'm',
    overflowY: 'scroll',
    zIndex: 1,
    [NavItemWrapper.toString()]: {
      [Title.toString()]: {
        variant: 'text.h5',
        fontWeight: 'light',
        color: 'gray1',
        mb: ['xs', 's'],
      },
      [WrapperLinks.toString()]: {
        mt: 'xs',
      },
    },
    '& > *': {
      flex: 1,
    },
  }),
);
