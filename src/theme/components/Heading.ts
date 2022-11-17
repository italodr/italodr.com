interface StyleProps {
  colorMode: string;
}

const Heading = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    fontWeight: 200,
  }),
};

export default Heading;
