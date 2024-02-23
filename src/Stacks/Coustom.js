import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import dummy from './../Assets/Dummy.jpg';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../Utlies/Images';
import {useGetmeMutation} from '../Store/Main';
const Coustom = props => {
  const [Getme, {data, status, isLoading}] = useGetmeMutation();
  useLayoutEffect(() => {
    Getme();
  }, []);
  console.log('data', data?.data?.details, status);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingStart: responsiveWidth(5),
            marginTop: responsiveHeight(3),
          }}>
          <Image
            resizeMode="contain"
            source={images.Applogo}
            style={{
              height: responsiveWidth(25),
              width: responsiveWidth(25),
            }}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontFamily: 'Poppins-Bold',
              color: '#000',
              letterSpacing: 1,
            }}>
            {data?.data?.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.3),
                color: 'gray',
                fontFamily: 'Poppins-Regular',
                bottom: responsiveHeight(1),
              }}>
              {data?.data?.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            paddingTop: responsiveHeight(3),
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default Coustom;

const styles = StyleSheet.create({});
