import * as React from 'react';
import { mergeProps, useButton, useFocusRing } from 'react-aria';
import { StyledButton, ContentText, Arrow, ArrowLarge } from './index.style';

type ArrowSize = 's' | 'l';

export type Props = {
  arrowSize?: ArrowSize;
  arrowReversed?: boolean;
  focusVisible?: boolean;
};

type MapArrows = Partial<{ [Size in ArrowSize]: React.ReactElement }>;

const Arrows: MapArrows = {
  s: <Arrow />,
  l: <ArrowLarge />,
};

const renderArrow = (arrowSize?: ArrowSize) => arrowSize && Arrows[arrowSize];

const Button: React.FC<Props> = ({ focusVisible, arrowSize, arrowReversed, children, ...props }) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const buttonProps = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledButton
      {...mergeProps(props, buttonProps, focusProps)}
      ref={ref}
      focusVisible={isFocusVisible}
      arrowSize={arrowSize}
      arrowReversed={arrowReversed}
    >
      {children && <ContentText>{children}</ContentText>}
      {renderArrow(arrowSize)}
    </StyledButton>
  );
};

export default Button;
