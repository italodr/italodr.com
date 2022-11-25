interface StyleProps {
  colorMode: string;
}

const Footer = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    container: {
      borderTop: '1px solid',
      borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .15)' : 'hsla(0, 100%, 0%, .15)',
      py: 2,
      mt: 48,
    },
    wrapper: {
      alignItems: { base: 'initial', md: 'center' },
      flexDirection: { base: 'column-reverse', md: 'row' },
      mb: { base: 4, md: 0 },
    },
    text: {
      borderStyle: 'solid',
      borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .15)' : 'hsla(0, 100%, 0%, .15)',
      borderWidth: { base: 0, md: '0 1px 0 0' },
      fontSize: 'xs',
      mt: { base: 4, md: 0 },
      mr: { base: 0, md: 4 },
      pr: { base: 0, md: 4 },
    },
    link: {
      fontSize: 'xs',
      mx: { base: 0, md: 2 },
      py: 2,
      _hover: {
        textDecoration: 'none',
      },
    },
  }),
};

export default Footer;
