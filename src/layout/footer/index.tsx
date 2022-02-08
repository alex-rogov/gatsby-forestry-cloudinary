import * as React from 'react';
import EmailForm from 'components/email-form';
import NavItem from 'components/nav-item';
import type { Props as NavItemProps } from 'components/nav-item';
import { StyledFooter, Wrapper, Copyright, WrapperNav } from './index.style';

type Props = {
  navItems: NavItemProps[];
};

const Footer: React.FC<Props> = ({ navItems }) => {
  return (
    <StyledFooter>
      <Wrapper>
        <EmailForm />
        <WrapperNav>
          {navItems?.map((props) => (
            <NavItem key={props.title} {...props} />
          ))}
        </WrapperNav>
        <Copyright>© {new Date().getFullYear()} ATB Financial. All Rights Reserved.</Copyright>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
