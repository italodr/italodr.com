import { Box, Container, Flex } from '@chakra-ui/react';
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import { ToggleMode } from '../../components/ToggleMode';
import { Footer } from '../Footer';
import { Logo } from '../Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipNavLink id="skip-to-content">Saltar al contenido</SkipNavLink>
    <Container maxW="container.xl">
      <Flex as="header" justifyContent="space-between" alignItems="center">
        <Logo />
        <ToggleMode />
      </Flex>
      <SkipNavContent id="skip-to-content" />
      <Box as="main" pt={10}>
        {children}
      </Box>
    </Container>
    <Footer />
  </>
);
