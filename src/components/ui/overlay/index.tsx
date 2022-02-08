import * as React from 'react';
import { Wrapper } from './index.style';

export type Props = {
  show?: boolean;
};

const Overlay: React.FC<Props> = ({ show, children }) => {
  if (!show) {
    return null;
  }

  return <Wrapper>{children}</Wrapper>;
};

export default Overlay;
