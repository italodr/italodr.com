import {
  ListItem,
  ListProps,
  UnorderedList,
  useStyleConfig,
} from '@chakra-ui/react';
import { Link } from '../Link';

interface CategoriesProps extends ListProps {
  terms: string[];
  size?: 'sm'|'lg'
}

export const Categories = ({ terms, size, ...props }: CategoriesProps) => {
  const styles = useStyleConfig('Categories');

  return terms ? (
    <UnorderedList sx={styles} {...props}>
      {terms.map((term: string) => (
        <ListItem key={term}>
          <Link href={`/s/${term}`} aria-label={`Ir a la categoría ${term}`}>
            #{term}
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  ) : (
    <></>
  );
};
