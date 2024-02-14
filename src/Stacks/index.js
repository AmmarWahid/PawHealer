import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStacks from './Stacks';
import DrawerStacks from './Drawer';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function Routes() {
  const {accestoken} = useSelector(state => state.Slice);

  console.log('accesstoken', accestoken);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {accestoken ? (
          <Stack.Screen name="DrawerStacks" component={DrawerStacks} />
        ) : (
          <Stack.Screen name="AuthStacks" component={AuthStacks} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
