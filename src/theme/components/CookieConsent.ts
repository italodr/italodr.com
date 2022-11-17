interface StyleProps {
  colorMode: string;
}

const CookieConsent = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    container: {
      background: 'white',
      boxShadow: '1px 0.1px 10px 6px hsl(0deg 0% 0% / 15%)',
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
