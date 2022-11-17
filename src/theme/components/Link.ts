interface StyleProps {
  colorMode: string;
}

const Link = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    color: colorMode === 'dark' ? 'brand.dark.500' : 'brand.light.800',
    _hover: {
      background: colorMode === 'dark' ? 'brand.dark.200' : 'brand.light.700',
      color: colorMode === 'dark' ? 'gray.800' : 'whiteAlpha.900',
    },
    'h1, h2, h3, h4, h5, h6': {
      _hover: {
        color: 'inherit',
      }
    }
  }),
};

export default Link;
