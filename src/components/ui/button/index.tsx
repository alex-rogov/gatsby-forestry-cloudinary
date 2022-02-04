import * as React from 'react';
import { mergeProps, useButton, useFocusRing } from 'react-aria';
import { StyledButton, Main, Content, Arrow } from './index.style';

export type Props = { withArrow?: boolean; focusVisible?: boolean };

const Button: React.FC<Props> = ({ withArrow, focusVisible, children, ...props }) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const buttonProps = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledButton ref={ref} focusVisible={isFocusVisible} {...mergeProps(props, buttonProps, focusProps)}>
      <Main>
        <Content>{children}</Content>
        {withArrow && <Arrow />}
      </Main>
    </StyledButton>
  );
};

export default Button;
