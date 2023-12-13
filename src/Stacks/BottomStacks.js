import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dog from '../Screens/Appscreens/Category/DogHerb/Dog';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Appscreens/Home/Home';
import Products from '../Screens/Appscreens/Category/A_Z/Products';
import Catherb from '../Screens/Appscreens/Category/CatHerb/Catherb';
import DogHerbs from '../Screens/Appscreens/Category/DogHerbs';
import Supplements from '../Screens/Appscreens/Category/Suplements/Suplements';
import Favorites from '../Screens/Appscreens/Favorites/Favorites';
import Productdetail from '../Screens/Appscreens/Category/Productdetail';
import Mycart from '../Screens/Appscreens/MyCart/Mycart';
import Profile from '../Screens/Appscreens/Profile';
import EditProfile from '../Screens/Appscreens/Profile/EditProfile';
import Notification from '../Screens/Appscreens/Notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../Utlies/constant/Themes';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Catherb" component={Catherb} />
      <Stack.Screen name="Dog" component={Dog} />
      <Stack.Screen name="Supplements" component={Supplements} />
    </Stack.Navigator>
  );
};

const FavStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Productdetail" component={Productdetail} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Mycart" component={Mycart} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

function TabStacks() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.AppColor,
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          borderTopColor: colors.AppColor,
        },
        tabBarItemStyle: {
          top: responsiveHeight(0.2),
        },
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.5),
            fontFamily: 'Poppins-Regular',
          },
          tabBarIconStyle: {
            // top: responsiveHeight(0.1),
          },
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="home"
              size={responsiveHeight(3)}
              color={focused ? colors.AppColor : '#000'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',

          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.5),
            // fontWeight: '600',
            left: responsiveWidth(0.5),
            fontFamily: 'Poppins-Regular',
          },
          tabBarIconStyle: {
            // top: responsiveHeight(0.1),
          },
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="shopping-cart"
              size={responsiveHeight(3)}
              color={focused ? colors.AppColor : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavStack"
        component={FavStack}
        options={{
          tabBarLabel: 'Favourite',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.5),
            fontFamily: 'Poppins-Regular',
          },
          tabBarIconStyle: {
            // top: responsiveHeight(0.1),
          },
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="heart"
              size={responsiveHeight(3)}
              color={focused ? colors.AppColor : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.5),

            fontFamily: 'Poppins-Regular',
          },
          tabBarIconStyle: {
            // top: responsiveHeight(0.1),
          },
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="user"
              size={responsiveHeight(3)}
              color={focused ? colors.AppColor : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabStacks;
