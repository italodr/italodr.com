interface StyleProps {
  colorMode: string;
}

const Categories = {
  baseStyle: ({ colorMode }: StyleProps) => ({
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 'sm',
    listStyle: 'none',
    p: 0,
    mx: 0,
    gap: 2,
  }),
};

export default Categories;
