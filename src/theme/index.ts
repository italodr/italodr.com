import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { config } from './config';
import { fonts } from './fonts';
import { styles } from './styles';
import { semanticTokens } from './semantic-tokens';
import { textStyles } from './textStyles';
import components from './components';

const theme = extendTheme({
  colors,
  semanticTokens,
  components,
  config,
  fonts,
  styles,
  textStyles,
});

export default theme;
