import type { Theme } from 'theme-ui';
import baseTheme from '../theme';

const theme: Theme = {
  ...baseTheme,
  config: {
    initialColorModeName: 'light',
  },
  text: {
    h1: {
      fontSize: 'h1',
    },
    h2: {
      fontSize: ['h2Mobile', 'h2'],
      fontWeight: 'light',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: ['h3Mobile', 'h3'],
      fontWeight: 'bold',
      letterSpacing: 'regularS',
    },
    h6: {
      fontSize: 'h6',
    },
    h7: {
      fontSize: 'h7',
    },
    h8: {
      fontSize: 'h8',
    },
    bodyS: {
      fontSize: ['bodyS', 'h6'],
      lineHeight: ['24px', '28px'],
    },
    bodyParagraphS: {
      fontSize: 'h6',
      lineHeight: '28px',
    },
    bodyParagraph: {
      fontSize: ['h6', 'bodyL'],
      lineHeight: ['28px', '32px'],
    },
  },
  buttons: {
    icon: {
      width: 24,
    },
    primary: {
      variant: 'text.h7',
      fontWeight: 'bold',
      color: 'secondary',
      minHeight: 'button',
      transition: 'buttons',
      letterSpacing: 'regular',
      //TODO: proper button resizing according to the content
      py: 18,
      borderRadius: 0,
      '&:hover': {
        bg: 'blue',
        color: 'btnHover',
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

export default theme;
