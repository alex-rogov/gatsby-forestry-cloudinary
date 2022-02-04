import * as React from 'react';
import { IconButton, Image } from 'theme-ui';
import type { NavLink } from 'types';

//TODO: remove
const renderImageOrSvg = (src: Required<Pick<NavLink, 'src'>>) => {
  const isElement = typeof src === 'function';
  const isImage = typeof src === 'string';

  if (!isImage && !isElement) {
    return null;
  }

  if (isImage) {
    return <Image src={String(src)} />;
  }

  const Element: React.ComponentType = src as React.ComponentType;

  return (
    Element && (
      <IconButton>
        <Element />
      </IconButton>
    )
  );
};

export default renderImageOrSvg;
