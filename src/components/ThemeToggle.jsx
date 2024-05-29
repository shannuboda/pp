// src/components/ThemeToggle.js
import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
  );
}

export default ThemeToggle;
