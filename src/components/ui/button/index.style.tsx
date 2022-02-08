import styled from '@emotion/styled';
import { css, Button, Text, Flex } from 'theme-ui';
import DefaultArrow from 'assets/images/icons/arrow-sm.svg';
import DefaultArrowLarge from 'assets/images/icons/arrow-lg.svg';
import focusOutline from 'utils/focusOutline';
import type { Props } from '.';

const showArrow = (withArrow?: boolean) => !withArrow && { display: 'none' };

export const Arrow = styled(DefaultArrow)(
  css({
    transition: 'buttons',
    maxWidth: 24,
    width: 24,
  }),
);

export const ArrowLarge = styled(DefaultArrowLarge)(
  css({
    transition: 'buttons',
    maxWidth: 56,
    width: 56,
  }),
);

const arrowTransformations = (arrowReversed?: boolean) => {
  const rotation = (arrowReversed && 'rotate(180deg)') || '';
  const offset = 'translate(15%)';

  return {
    // TODO add supporting of using styled components as selectors
    [`${Arrow.toString()}:first-of-type`]: {
      transform: rotation,
    },
    '&:hover': {
      [`${Arrow.toString()}:first-of-type`]: {
        transform: `${rotation} ${offset}`,
      },
    },
  };
};

export const Main = styled(Flex)(css({}));

export const ContentText = styled(Text)(
  css({
    textAlign: 'left',
  }),
);

export const StyledButton = styled(Button)<Props>(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 'xs',
    p: 'xs',
  }),
  ({ focusVisible, arrowSize, arrowReversed }) =>
    css({
      ...focusOutline(focusVisible),
      ...arrowTransformations(arrowReversed),
      flexDirection: !arrowReversed ? 'row' : 'row-reverse',
      [Arrow.toString()]: {
        ...showArrow(!!arrowSize),
      },
    }),
);
