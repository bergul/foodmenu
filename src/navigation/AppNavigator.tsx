import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Settings } from './screens/Settings';
import CategoryMeals from './screens/CategoryMeals';
import { HeaderButton } from '@react-navigation/elements';
import Favorites from './screens/Favorites';
import { Updates } from './screens/Updates';
import { Home } from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: 'Home' }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerTitle: 'Settings' }}
            />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMeals}
                options={{ headerTitle: 'Meals' }}

            />

            <Stack.Screen
                name="Updates"
                component={Updates}
                options={{ headerTitle: 'Updates' }}
                initialParams={{ query: 'm1' }}
            />
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{ headerTitle: 'Updates' }}

            />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <SettingsStack />
        </NavigationContainer>
    );
}