import styled from '@emotion/styled';
import { Button, css, Flex, Text } from 'theme-ui';
import DefaultArrow from 'assets/images/icons/arrow-sm.svg';
import focusOutline from 'utils/focusOutline';
import type { Props } from '.';

export const StyledButton = styled(Button)<Props>(css({}), ({ focusVisible }) =>
  css({
    ...focusOutline(focusVisible),
  }),
);

export const Main = styled(Flex)(css({ alignItems: 'center', gap: 's', px: 's' }));

export const Content = styled(Text)(css({ textAlign: 'left', flex: 1 }));

export const Arrow = styled(DefaultArrow)(css({ width: 24 }));
