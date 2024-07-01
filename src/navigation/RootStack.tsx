import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/Home';
import ProfileScreen from '../screen/Profile';
import DetailScreen from '../screen/Detail';

const Stack = createNativeStackNavigator();

const RootStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Profile'} component={ProfileScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
