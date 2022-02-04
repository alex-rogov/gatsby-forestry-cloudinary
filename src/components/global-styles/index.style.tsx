import { css as interpolation } from '@emotion/react';
import { css } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';
import einaLight from 'assets/fonts/eina-light.otf';
import einaRegular from 'assets/fonts/eina-regular.otf';
import einaBold from 'assets/fonts/eina-bold.otf';

export const fonts = interpolation`
  @font-face {
    font-family: Eina;
    src: url(${einaLight}) format('truetype');
    font-weight: 100;
  }
  @font-face {
    font-family: Eina;
    src: url(${einaRegular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: Eina;
    src: url(${einaBold}) format('truetype');
    font-weight: 700;
  }
`;

const styles: ThemeUIStyleObject = {
  html: {
    boxSizing: 'border-box',
    transition: 'html',
  },
  body: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'regular',
    lineHeight: 'base',
    letterSpacing: 'regularS',
  },
  // img: {
  //   filter: 'brightness(0) invert(1)',
  // },
  'html, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block',
  },
  '*[hidden]': { display: 'none' },
  'ol, ul': { listStyle: 'none' },
  'blockquote, q': { quotes: 'none' },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: ["''", 'none'],
  },
  table: { borderCollapse: 'collapse', borderSpacing: 0 },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    userSelect: 'none',
  },
  a: { textDecoration: 'none', color: 'inherit' },
  button: {
    border: 'none',
    margin: 0,
    padding: 0,
    width: 'auto',
    overflow: 'visible',
    background: 'transparent',
    color: 'inherit',
    font: 'inherit',
    textAlign: 'inherit',
    outline: 'none',
    lineHeight: 'inherit',
    WebkitAppearance: 'none',
  },
  'p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea': {
    userSelect: 'text',
  },
};

export default css(styles);
