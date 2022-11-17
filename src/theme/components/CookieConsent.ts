interface StyleProps {
  colorMode: string;
}

const CookieConsent = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    container: {
      background: 'white',
      color: 'black',
      bottom: 4,
      position: 'fixed',
      right: 4,
      p: 8,
      maxW: '36rem',
      width: '92%',
    },
    ko: {
      color: 'gray.700',
      fontSize: 'sm',
      fontWeight: 500,
      _hover: {
        color: 'gray.900',
      },
    },
    ok: {
      background: `brand.${colorMode}.900`,
      color: `brand.${colorMode}.100`,
      fontSize: 'sm',
      fontWeight: 500,
      _hover: {
        background: `brand.${colorMode}.700`,
      },
    },
    link: {
      color: `brand.${colorMode}.900`,
      _hover: {
        background: `brand.${colorMode}.700`,
      },
    },
  }),
};

export default CookieConsent;
