import * as React from 'react';
import GlobalStyles, { Fonts } from 'components/global-styles';
import linkedIn from 'assets/images/icons/linkedin.svg';
import twitter from 'assets/images/icons/twitter.svg';
import type { Props as NavItemProps } from 'components/nav-item';
import Meta from 'components/meta';
import { Wrapper } from './index.style';
import Header from './header';
import Footer from './footer';

export const navItems: NavItemProps[] = [
  {
    title: 'Social',
    noDivider: true,
    topLinks: [
      { href: '#', src: linkedIn },
      { href: '#', src: twitter },
    ],
    bottomLinks: [{ href: '#', text: '@ATBVentures' }],
  },
  {
    title: 'Our Story',
    topLinks: [{ href: '#', text: 'What we do' }],
    bottomLinks: [{ href: '#', text: 'Press' }],
  },
  {
    title: 'Products',
    topLinks: [{ href: '#', text: 'About our Products' }],
    bottomLinks: [{ href: '#', text: 'Explore our Portfolio' }],
  },
  {
    title: 'Resources',
    topLinks: [{ href: '#', text: 'Tools' }],
    bottomLinks: [{ href: '#', text: 'Insights' }],
  },
  {
    title: 'Partnerships',
    topLinks: [{ href: '#', text: 'Partnership program' }],
    bottomLinks: [{ href: '#', text: 'CVC' }],
  },
  {
    title: 'Careers',
    topLinks: [{ href: '#', text: 'Life at Ventures' }],
    bottomLinks: [{ href: '#', text: 'Current Job Openings' }],
  },
];

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Meta />
    <GlobalStyles />
    <Fonts />
    <Header navItems={navItems.slice(1)} />
    {children}
    <Footer navItems={navItems} />
  </Wrapper>
);

export default Layout;
