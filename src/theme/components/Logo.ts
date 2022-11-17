interface StyleProps {
  colorMode: string;
}

const Logo = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    color: 'var(--chakra-colors-chakra-body-text)',
    fontSize: '3xl',
    textDecoration: 'none',
    _hover: {
      background: 'none',
      color: colorMode === 'dark' ? 'brand.dark.500' : 'brand.light.600',
    },
  }),
};

export default Logo;
