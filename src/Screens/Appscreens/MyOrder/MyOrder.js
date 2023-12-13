import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Header from '../../../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../Utlies/constant/Themes';
import Delivered from './Delivered';
import Processing from './Processing';
import Cancelled from './Cancelled';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{height: 0, elevation: 0}}
    style={{
      backgroundColor: 'transparent',
      height: responsiveHeight(8),
      elevation: 0,
      width: responsiveWidth(98),
      alignSelf: 'center',
      gap: 12,
    }}
    activeColor={'green'}
    inactiveColor={'gray'}
    renderLabel={({route, focused}) => (
      <View
        style={{
          backgroundColor: focused ? colors.AppColor : 'transparent',
          width: responsiveWidth(32),
          height: responsiveHeight(6),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: responsiveWidth(10),
        }}>
        <Text
          style={{
            color: focused ? '#fff' : 'gray',
            fontSize: responsiveFontSize(1.6),
            fontFamily: 'Poppins-Regular',
            top: 2,
          }}>
          {route.title}
        </Text>
      </View>
    )}
  />
);

const MyOrder = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Delivered', title: 'Delivered'},
    {key: 'Processing', title: 'Processing'},
    {key: 'Cancelled', title: 'Cancelled'},
  ]);

  const renderScene = SceneMap({
    Delivered: Delivered,
    Processing: Processing,
    Cancelled: Cancelled,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Header Heading={'My Order'} color={'#fff'} />
      <View style={{flex: 1, paddingTop: responsiveHeight(4)}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          layoutDirection={'rtl'}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
