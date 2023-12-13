// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dog from '../Screens/Appscreens/Category/DogHerb/Dog';

const Tab = createBottomTabNavigator();

function Test() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Dog" component={Dog} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Test;
