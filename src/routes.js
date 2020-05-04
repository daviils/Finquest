// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Welcome from './pages/welcome';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Perfil from './pages/perfil';
import Conquest from './pages/conquest';
import Record from './pages/record';

function RoutesStack() {

  
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Dashboard" component={Dashboard} />
        <AppStack.Screen name="Perfil" component={Perfil} />
        <AppStack.Screen name="Conquest" component={Conquest} />
        <AppStack.Screen name="Record" component={Record} />
      </AppStack.Navigator>

    </NavigationContainer>
    
  );
}



export default RoutesStack ;


