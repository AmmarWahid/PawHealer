import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dog from '../Screens/Appscreens/Category/DogHerb/Dog';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStacks from './BottomStacks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Review from '../Screens/Appscreens/Reviews/Review';
import ReviewsDetail from '../Screens/Appscreens/Reviews/ReviewsDetail';
import MyOrder from '../Screens/Appscreens/MyOrder/MyOrder';
import About from '../Screens/Appscreens/About';
import Contectus from '../Screens/Appscreens/Contectus';
import Thinkstoknow from '../Screens/Appscreens/ThingstoKnow/Thingstoknow';
import Privacy from '../Screens/Appscreens/ThingstoKnow/Privacy';
import Quality from '../Screens/Appscreens/ThingstoKnow/Quality';
import Return from '../Screens/Appscreens/ThingstoKnow/Return';
import Shipping from '../Screens/Appscreens/ThingstoKnow/Shipping';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ReviewStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="ReviewsDetail" component={ReviewsDetail} />
    </Stack.Navigator>
  );
};
const ThingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Thinkstoknow" component={Thinkstoknow} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Quality" component={Quality} />
      <Stack.Screen name="Return" component={Return} />
      <Stack.Screen name="Shipping" component={Shipping} />
    </Stack.Navigator>
  );
};
function DrawerStacks() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="TabStacks"
        component={TabStacks}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
      <Drawer.Screen
        name="ReviewStack"
        component={ReviewStack}
        options={{
          drawerLabel: 'Reviews',
        }}
      />
      <Drawer.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          drawerLabel: 'My Orders',
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: 'About us',
        }}
      />
      <Drawer.Screen
        name="Contectus"
        component={Contectus}
        options={{
          drawerLabel: 'Contect us',
        }}
      />
      <Drawer.Screen
        name="ThingsStack"
        component={ThingsStack}
        options={{
          drawerLabel: 'Things to know',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerStacks;
