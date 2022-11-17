const ToggleMode = {
  baseStyle: {
    w: 6,
    h: 6,
    borderRadius: 'full',
    bg: '#f0cf61',
    boxShadow: '0',
    cursor: 'pointer',
    transition: 'all',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in-out',

    '&.dark': {
      bg: 'transparent',
      boxShadow: 'inset -6px -6px 1px 1px #fff',
    },
  },
};

export default ToggleMode;
