import { Box, Container, useMultiStyleConfig, Flex } from '@chakra-ui/react';
import { Link } from '../Link';

export const Footer = () => {
  const styles = useMultiStyleConfig('Footer');

  return (
    <Box sx={styles.container}>
      <Container maxW="container.xl">
        <Flex sx={styles.wrapper}>
          <Box sx={styles.text}>&copy; Copyright {new Date().getFullYear()} :: italodr.</Box>
          <Link href="/politica-cookies" sx={styles.link}>
            Política de cookies
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
