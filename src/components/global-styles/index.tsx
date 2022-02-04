import * as React from 'react';
import { Global } from '@emotion/react';
import styles, { fonts } from './index.style';

const GlobalStyles: React.FC = () => <Global styles={styles} />;

export const Fonts: React.FC = () => <Global styles={fonts} />;

export default GlobalStyles;
