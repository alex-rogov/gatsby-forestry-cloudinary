const focusOutline = (focusVisible?: boolean) =>
  focusVisible && {
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: 4,
  };

export default focusOutline;
