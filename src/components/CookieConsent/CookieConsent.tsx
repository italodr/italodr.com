// @ts-nocheck
import { useEffect, useState } from 'react';
import { Box, Button, Flex, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { Link } from '../Link';

export const COOKIE_CONSENT = 'cookie-consent';

export const CookieConsent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_CONSENT]);
  const [consent, setConsent] = useState(true);
  const styles = useMultiStyleConfig('CookieConsent');

  useEffect(() => {
    setConsent(!!cookies[COOKIE_CONSENT]);
  }, []);

  const denyConsent = () => setConsent(true);

  const acceptConsent = () => {
    setConsent(true);
    setCookie(COOKIE_CONSENT, 'true', { path: '/', maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  };

  return consent ? (
    <></>
  ) : (
    <Box sx={styles.container} fontSize="sm">
      <Text textStyle="h4" mt={0}>
        Configuración de cookies
      </Text>
      <Text mt={0}>
        Este sitio web requiere el uso de cookies, para mejorar la experiencia del mismo. Elija qué
        cookies desea permitir. Puede encontrar más información en nuestra{' '}
        <Link href="/politica-cookies" sx={styles.link}>
          política de cookies
        </Link>
        .
      </Text>

      <Box as="p" textStyle="h5" mb={1}>
        Necesarias
      </Box>
      <Text mb={2} mt={0}>
        Estas cookies son absolutamente necesarias para que nuestro sitio web sea operativo.
      </Text>
      <Box as="p" textStyle="h5" mb={1}>
        Comportamiento
      </Box>
      <Text mb={2} mt={0}>
        Con datos anonimizados, analizamos cómo usa nuestro sitio web y usamos esta información para
        mejorar nuestro sitio.
      </Text>

      <Flex gap={2} mt={8} justifyContent="flex-end">
        <Button variant="ghost" onClick={denyConsent} mr={4} sx={styles.ko}>
          Rechazar
        </Button>
        <Button onClick={acceptConsent} sx={styles.ok}>
          Aceptar
        </Button>
      </Flex>
    </Box>
  );
};
