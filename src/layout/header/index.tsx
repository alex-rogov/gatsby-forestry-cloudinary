import * as React from 'react';
import { Box, IconButton, useColorMode } from 'theme-ui';
import Switch from 'components/ui/switch';
import SearchIcon from 'assets/images/icons/btn-search.svg';
import CrossIcon from 'assets/images/icons/btn-cross.svg';
import { Logo, Wrapper, StyledHeader } from './index.style';

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <Box mx="auto" />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <CrossIcon />
        </IconButton>
        <Switch checked={isDark} onChange={() => setColorMode(isDark ? 'light' : 'dark')} />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
