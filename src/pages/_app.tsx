import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ChakraProvider } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';

import { CookieConsent, COOKIE_CONSENT } from '../components/CookieConsent';
import theme from '../theme';

import '../styles/fonts.css';
import '../styles/prism-theme.css';
import '../styles/override-prism.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [cookies] = useCookies([COOKIE_CONSENT]);
  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            dataLayer.push({
              event: 'default_consent',
            });
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5NWJ4GQ');`,
        }}
      />
      {cookies[COOKIE_CONSENT] && (
        <Script
          id="update-consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5NWJ4GQ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <CookieConsent />
      </ChakraProvider>
    </>
  );
};

export default CustomApp;
