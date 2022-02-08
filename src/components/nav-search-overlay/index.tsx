import * as React from 'react';
import { Box, Image } from 'theme-ui';
import type { NavLink } from 'types';
import type { Props as NavItemProps } from 'components/nav-item';
import type { Props as OverlayProps } from 'components/ui/overlay';
import NavItem from 'components/nav-item';
import { Wrapper, Main, Title, Content, ImageContent, Information, InformationItem } from './index.style';
import Overlay from 'components/ui/overlay';

type Props = {
  navItems: NavItemProps[];
  showSearch: boolean;
} & OverlayProps;

const NavSearchOverlay: React.FC<Props> = ({ show, navItems, showSearch }) => (
  <Overlay show={show}>
    {navItems?.slice(1).map((props) => (
      <NavItem key={props.title} {...props} />
    ))}
  </Overlay>
);

export default NavSearchOverlay;
