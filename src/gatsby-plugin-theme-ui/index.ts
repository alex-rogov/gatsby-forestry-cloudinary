import { merge, Theme } from 'theme-ui';
import baseTheme from '../theme';

const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  text: {
    hero: { fontSize: ['heroMobile', 'hero'], letterSpacing: '-0.01em', lineHeight: ['64px', '88px'] },
    h1: {
      fontSize: ['h1Mobile', 'h1'],
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: ['h2Mobile', 'h2'],
      letterSpacing: [null, 'mediumS'],
    },
    h3: {
      fontSize: ['h3Mobile', 'h3'],
      letterSpacing: [null, 'mediumS'],
    },
    h4: {
      fontSize: ['h3', 'h4'],
    },
    h5: {
      fontSize: ['h5Mobile', 'h5'],
      letterSpacing: ['mediumS', '-0.01em'],
    },
    h6: {
      fontSize: 'h6',
      lineHeight: '24px',
    },
    h7: {
      fontSize: 'h7',
      letterSpacing: ['regular', 'looseS'],
    },
    h8: {
      fontSize: 'h8',
    },
    body: {
      fontSize: 'body',
      lineHeight: '28px',
    },
    bodyS: {
      fontSize: ['bodyS', 'body'],
      lineHeight: ['24px', '28px'],
    },
    bodyL: {
      fontSize: ['body', 'bodyL'],
      lineHeight: ['32px', '28px'],
    },
    button: {
      fontSize: 'h7',
      letterSpacing: 'regular',
    },
  },
  buttons: {
    icon: {
      width: 24,
    },
    primary: {
      variant: 'text.button',
      fontWeight: 'bold',
      color: 'secondary',
      minHeight: 'button',
      transition: 'buttons',
      letterSpacing: 'regular',
      borderRadius: 0,
      '&:hover': {
        bg: 'blue',
        color: 'btnHover',
      },
    },
    link: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      ':hover': {
        bg: 'transparent',
        color: 'primary',
      },
    },
    round: {
      variant: 'buttons.primary',
      boxShadow: 'primary',
      bg: 'btnRound',
      borderRadius: 100,
      color: 'primary',
      alignItems: 'center',
      px: 'xxs',
      ':hover': {
        bg: 'btnRound',
        color: 'primary',
      },
    },
    emailSubmit: {
      variant: 'buttons.primary',
      bg: '#111B22',
      color: '#E0E6EA',
    },
  },
  cards: {
    primary: {
      bg: 'productCard.bg',
      border: '1px solid',
      borderColor: 'productCard.border',
      maxWidth: 'productCard',
    },
    postPreview: {
      maxWidth: 'postPreviewCard',
    },
  },
  forms: {
    input: {
      height: 'input',
      color: 'gray1',
      bg: 'white',
      border: 'none',
      borderRadius: 0,
    },
    checkbox: {
      bg: 'white',
    },
  },
  layout: {
    header: {
      color: 'highlight',
    },
    footer: {
      bg: 'gray2',
    },
  },
};

export default merge(baseTheme, theme);
