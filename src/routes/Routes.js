import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../components/pages/Dashboard/Dashboard';
import About from '../components/pages/About/About'

const Stack = createNativeStackNavigator();

export default Routes = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dash" component={Dashboard} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
