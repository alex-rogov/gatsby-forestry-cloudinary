import styled from '@emotion/styled';
import { Flex, css, Box } from 'theme-ui';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    minHeight: '100vh',
  }),
);

export const Content = styled(Box)(
  css({
    width: '100%',
    flex: '1 1 auto',
  }),
);
