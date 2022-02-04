import * as React from 'react';

const ConditonalWrapping: React.FC<{
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
}> = ({ condition, wrapper, children }) => {
  if (condition) {
    return wrapper(children);
  }

  return children as React.ReactElement;
};

export default ConditonalWrapping;
