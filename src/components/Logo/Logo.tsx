import { useStyleConfig } from '@chakra-ui/react';
import { Link } from '../Link';

export const Logo = () => {
  const styles = useStyleConfig('Logo');

  return (
    <Link href="/" sx={styles}>
      italodr.
    </Link>
  );
};
