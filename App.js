import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation/index';

import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
