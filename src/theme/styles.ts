// @ts-ignore
import { textStyles } from './textStyles';

interface StyleProps {
  colorMode: string;
}

export const styles = {
  global: ({ colorMode }: StyleProps) => ({
    'body': {
      fontSize: ['1rem', '1.125rem'],
      fontWeight: 200,
      letterSpacing: '0.5px',
      lineHeight: [1.6, 1.8],
    },
    'h1': {
      ...textStyles.h1,
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
    'h2': {
      ...textStyles.h2,
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      mt: 12,
      mb: 8,
    },
    'h3': {
      ...textStyles.h3,
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      my: 6,
    },
    'h4': {
      ...textStyles.h4,
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
    'h5': {
      ...textStyles.h5,
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
    'h6': {
      ...textStyles.h6,
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
    'ul': {
      ml: '4',
      my: '4',
    },
    'ol': {
      ml: '4',
      my: '4',
    },
    'li': {
      mb: '1  xxxxs',
    },
    'p': {
      my: 4,
      code: {
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .15)' : 'hsla(0, 100%, 0%, .15)',
        borderRadius: 2,
        color: colorMode === 'dark' ? 'code.dark' : 'code.light',
        fontSize: '.9em',
        py: 0.5,
        px: 2,
        _before: {
          content: '"`"',
        },
        _after: {
          content: '"`"',
        },
      },
    },
    'a': {
      'color': colorMode === 'dark' ? 'brand.dark.500' : 'brand.light.800',
      'display': 'inline-block',
      'textDecoration': 'underline',
      '_hover': {
        background: colorMode === 'dark' ? 'brand.dark.200' : 'brand.light.700',
        color: colorMode === 'dark' ? 'gray.800' : 'white',
        textDecoration: 'none !important',
      },
      'em': {
        fontSize: 'sm',
        _hover: {
          textDecoration: 'none',
          background: 'none',
        },
      },
      ':has(> img)': {
        display: 'block',
      },
    },
    'img': {
      'ml': '-10%',
      'mt': 12,
      'mb': 16,
      'maxWidth': 'initial',
      'width': '120%',
      '+ em': {
        display: 'block',
        mt: -14,
      },
      '[data-theme="dark"] &': {
        filter: 'brightness(.8) contrast(1.2)',
      },
    },
    'b': {
      fontWeight: 500,
    },
    'strong': {
      fontWeight: 500,
    },
    'table': {
      w: 'full',
      my: 12,
      th: {
        background: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .2)' : 'hsla(0, 100%, 0%, .1)',
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .3)' : 'hsla(0, 100%, 0%, .15)',
        px: 2,
        py: 1,
      },
      td: {
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .3)' : 'hsla(0, 100%, 0%, .15)',
        px: 2,
        py: 1,
      },
    },
    'time': {
      'color': colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      'display': 'block',
      'fontSize': 'md',
      'opacity': 0.7,
      '&.origin': {
        fontSize: 'xs',
      },
    },
    'pre': {
      my: '8 !important',
    },
    'code': {
      fontFamily: 'FiraCode, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      letterSpacing: 0,
    },
    'del': {
      opacity: 0.7,
    },
    'blockquote': {
      pl: 4,
      borderLeft: '2px solid',
      borderColor: colorMode === 'dark' ? 'brand.dark.300' : 'brand.light.700',
      color: colorMode === 'dark' ? 'brand.dark.100' : 'brand.light.900',
      maxWidth: { base: '92%', md: '86%' },
      my: 8,
      mx: 'auto',
      p: {
        my: 0,
      },
    },
    'iframe': {
      my: 8,
    },
    '.scroller': {
      overflowX: 'auto',
      width: '100%',
    },
    '.contain-image': {
      'ml': 0,
      'mx': 'auto',
      'maxWidth': '100%',
      'width': 'auto',
    },
    '.sr-only': {
      clip: 'rect(1px, 1px, 1px, 1px)',
      clipPath: 'inset(50%)',
      height: '1px',
      m: '-1px',
      overflow: 'hidden',
      p: 0,
      position: 'absolute',
      width: '1px',
    },
    '.footnotes': {
      borderTop: '1px solid',
      borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .15)' : 'hsla(0, 100%, 0%, .15)',
      fontSize: 'sm',
      mt: 24,
      pt: 4,
    },
  }),
};
