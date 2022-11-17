interface StyleProps {
  colorMode: string;
}

const Card = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    container: {
      borderRadius: 6,
      border: '1px solid',
      borderColor: colorMode === 'dark' ? 'hsla(0, 0%, 100%, .15)' : 'hsla(0, 100%, 0%, .15)',
      mb: 12,
      py: 2,
      px: 4,
      w: '100%',
      img: {
        m: 0,
      },
    },
  }),
};

export default Card;
