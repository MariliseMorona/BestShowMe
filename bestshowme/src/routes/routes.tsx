import React from "react";
import { OrientationProvider } from "../utils/usability.config/OrientationContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from '../routes/types';
import { ThemeProvider } from 'styled-components';
import theme, { navigationTheme } from '../utils/styles/theme';
import Home from "../modules/Home/screens/Home";
import Details from "../modules/Details/screens/Details";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <OrientationProvider>
            <ThemeProvider theme={theme}>
                <NavigationContainer theme={navigationTheme}>
                    <Stack.Navigator
                    screenOptions={{ 
                        headerStyle: { backgroundColor: theme.colors.purple },
                        headerTintColor: theme.colors.white,
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 25 },
                    }}>
                        <Stack.Screen
                            name = "Home"
                            component={Home}
                            options={{
                                title: "BestShowME"
                            }}
                        />
                        <Stack.Screen
                            name = "Details"
                            component={Details}
                            options={{
                                title: "Details",
                                headerBackTitleVisible: false
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </OrientationProvider>
    )
}