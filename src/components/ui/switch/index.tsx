import * as React from 'react';
import { useFocusRing, mergeProps } from 'react-aria';
import { SwitchProps } from 'theme-ui';
import { Wrapper, StyledSwitch } from './index.style';

export type Props = {
  checked?: boolean;
  focusVisible?: boolean;
} & React.PropsWithRef<SwitchProps>;

const Switch: React.FC<Props> = ({ checked, focusVisible, ...props }) => {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Wrapper>
      <StyledSwitch checked={checked} focusVisible={isFocusVisible} {...mergeProps(props, focusProps)} />
    </Wrapper>
  );
};

export default Switch;
