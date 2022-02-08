import * as React from 'react';
import { Box, IconButton, useColorMode } from 'theme-ui';
import Switch from 'components/ui/switch';
import SearchIcon from 'assets/images/icons/btn-search.svg';
import CrossIcon from 'assets/images/icons/btn-cross.svg';
import BurgerIcon from 'assets/images/icons/btn-burger.svg';
import { useMenuTriggerState } from 'react-stately';
import type { Props as NavItemProps } from 'components/nav-item';
import { Logo, Wrapper, StyledHeader } from './index.style';

type Props = {
  navItems: NavItemProps[];
};

const Header: React.FC<Props> = ({ navItems, children, ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';
  const menuState = useMenuTriggerState(props);

  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <Box mx="auto" />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={() => menuState.toggle()}>
          {menuState.isOpen ? <CrossIcon /> : <BurgerIcon />}
        </IconButton>
        <Switch checked={isDark} onChange={() => setColorMode(isDark ? 'light' : 'dark')} />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
