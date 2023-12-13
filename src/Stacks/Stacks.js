import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dog from '../Screens/Appscreens/Category/DogHerb/Dog';
import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import Otp from '../Screens/Auth/Otp';
import Sentcode from '../Screens/Auth/Sentcode';
import Recoverpassword from '../Screens/Auth/Recover';
import Forgetpassword from '../Screens/Auth/Forgetpassword';

const Stack = createNativeStackNavigator();

function AuthStacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Sentcode" component={Sentcode} />
      <Stack.Screen name="Recoverpassword" component={Recoverpassword} />
    </Stack.Navigator>
  );
}

export default AuthStacks;
