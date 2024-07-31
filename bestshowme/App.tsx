import React from 'react';
import Routes from './src/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import theme from './src/utils/styles/theme';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  const Stack = createNativeStackNavigator();

  return (
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
  );
}