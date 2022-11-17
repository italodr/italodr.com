import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface LinkProps extends ChakraLinkProps {}

export const Link = ({ href, children, ...props }: LinkProps) => (
  <ChakraLink as={NextLink} href={href} {...props}>
    {children}
  </ChakraLink>
);
