import {
  Box,
  Flex,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { Avatar, SocialLinks } from '../';

export const Card = () => {
  const styles = useMultiStyleConfig('Card');

  return (
    <Flex sx={styles.container}>
      <Avatar size="lg" />
      <Box ml={8} w="full">
        <Text fontWeight={400} m={0}>
          Italo Devoto Ramella
        </Text>
        <Text fontSize="sm" m={0}>
          Software developer
        </Text>
        <SocialLinks mt={4} />
      </Box>
    </Flex>
  );
};
