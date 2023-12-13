import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStacks from './Stacks';
import DrawerStacks from './Drawer';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStacks" component={AuthStacks} />
        <Stack.Screen name="DrawerStacks" component={DrawerStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
