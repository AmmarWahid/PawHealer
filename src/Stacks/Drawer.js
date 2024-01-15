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
import Coustom from './Coustom';
import {colors} from '../Utlies/constant/Themes';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native';
import {images} from '../Utlies/Images';
import Productdetail from '../Screens/Appscreens/Category/Productdetail';
import Checkout from '../Screens/Appscreens/Checkout/Checkout';
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
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.AppColor,
        drawerActiveTintColor: '#fff',
        // drawerInactiveTintColor: colors.AppColor,
        drawerItemStyle: {
          width: '100%',
          paddingLeft: responsiveWidth(3),
          // height: responsiveHeight(8),
          borderTopLeftRadius: responsiveWidth(10),
          borderBottomLeftRadius: responsiveWidth(10),
        },
        drawerLabelStyle: {
          fontSize: responsiveFontSize(1.7),
          fontFamily: 'Poppins-Regular',
        },

        unmountOnBlur: true,
      }}
      drawerContent={props => <Coustom {...props} />}>
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
          drawerIcon: ({focused, color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: responsiveWidth(8),
                height: responsiveWidth(10),

                tintColor: focused ? '#fff' : colors.AppColor,
              }}
              source={images.drawer1}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          drawerLabel: 'My Orders',
          drawerIcon: ({focused, color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: responsiveWidth(8),
                height: responsiveWidth(10),
                tintColor: focused ? '#fff' : colors.AppColor,
              }}
              source={images.drawer2}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: 'About us',
          drawerIcon: ({focused, color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: responsiveWidth(8),
                height: responsiveWidth(10),

                tintColor: focused ? '#fff' : colors.AppColor,
              }}
              source={images.drawer3}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contectus"
        component={Contectus}
        options={{
          drawerLabel: 'Contect us',
          drawerIcon: ({focused, color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: responsiveWidth(8),
                height: responsiveWidth(10),

                tintColor: focused ? '#fff' : colors.AppColor,
              }}
              source={images.drawer4}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ThingsStack"
        component={ThingsStack}
        options={{
          drawerLabel: 'Things to know',
          drawerIcon: ({focused, color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: responsiveWidth(8),
                height: responsiveWidth(10),

                tintColor: focused ? '#fff' : colors.AppColor,
              }}
              source={images.drawer5}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Productdetail"
        component={Productdetail}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
      <Drawer.Screen
        name="Checkout"
        component={Checkout}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
      {/* <Stack.Screen name="" component={} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerStacks;
