import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from '../routes/types';
import Home from "../modules/Home/screens/Home";
import Details from "../modules/Details/screens/Details";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                        title: "Details"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}