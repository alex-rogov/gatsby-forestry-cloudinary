import * as React from 'react';
import type { PageProps, GatsbyBrowser, GatsbySSR } from 'gatsby';
import { ThemeProvider } from 'theme-ui';
import Layout from './layout';
import theme from './theme';

const Root: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const Page: React.FC<PageProps> = ({ children }) => <Layout>{children}</Layout>;

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => <Root>{element}</Root>;

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  // eslint-disable-next-line
  <Page {...props}>{element as any}</Page>
);
