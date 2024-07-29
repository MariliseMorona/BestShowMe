import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/utils/styles/theme';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import Home from './src/modules/Home/screens/Home';
import Details from './src/modules/Details/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{title: 'BestShowME'}}>
          </Stack.Screen>
          <Stack.Screen
            name='Details'
            component={Details}>
          </Stack.Screen>
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.pink,
    fontFamily: theme.fonts.bold
  },
});