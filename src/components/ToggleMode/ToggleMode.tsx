import { Box, useColorMode, useStyleConfig } from '@chakra-ui/react';

export const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const styles = useStyleConfig('ToggleMode');

  return (
    <Box
      className={colorMode}
      sx={styles}
      onClick={toggleColorMode}
      aria-label={`Toggle ${colorMode === 'dark' ? 'Light' : 'Dark'}`}
    ></Box>
  );
}
