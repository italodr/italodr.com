import { Flex, FlexProps, Link as ChakraLink } from '@chakra-ui/react';

export const SocialLinks = (props: FlexProps) => (
  <Flex gap={3} {...props}>
    <ChakraLink
      href="https://www.linkedin.com/in/italo-devoto-ramella/"
      fontSize="sm"
      target="_blank"
    >
      LinkedIn
    </ChakraLink>
    <ChakraLink href="https://github.com/italodr" fontSize="sm" target="_blank">
      Github
    </ChakraLink>
  </Flex>
);
