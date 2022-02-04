import styled from '@emotion/styled';
import { Switch, css, Box } from 'theme-ui';
import focusOutline from 'utils/focusOutline';
import type { Props } from '.';

const ShapeStyles = { height: 16, width: 16, bg: 'secondary' };

export const Wrapper = styled(Box)(
  css({
    display: ['none', 'block'],
  }),
);

export const StyledSwitch = styled(Switch)<Props>(
  css({
    width: 57,
    height: 24,
    padding: 4,
    margin: 0,
    bg: 'primary',
    div: { ...ShapeStyles },
    'input:checked ~ &': {
      bg: 'primary',
      div: {
        transform: 'translateX(200%)',
      },
    },
  }),
  ({ focusVisible }) =>
    css({
      'input ~ &': {
        ...focusOutline(focusVisible),
      },
    }),
);
