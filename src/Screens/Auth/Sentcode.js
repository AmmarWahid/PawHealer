import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../../Utlies/Images';
import {
  DiscriptionText,
  LargeText,
  XLargeText,
  XXLargeText,
} from '../../Common/Coustomtext/Index';
import CoustomButton from '../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../Utlies/constant/Themes';

const Sentcode = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{flex: 0.1}}></View>
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image
            resizeMode="contain"
            source={images.emailscreen}
            style={styles.icon}
          />
          <XXLargeText
            children={'Check Your Email'}
            bold
            color={'#000'}
            center
          />
          <Text style={styles.emailtxt}>
            {
              ' We have sent you a reset password link on your\n registered email address'
            }
          </Text>
        </View>
        <View>
          <CoustomButton
            bgcolor={colors.AppColor}
            text={'Go to Email'}
            textcolor={'#fff'}
            width={responsiveWidth(80)}
            style={styles.btn}
            self
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sentcode;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  icon: {
    bottom: responsiveHeight(2),
    height: responsiveWidth(45),
    width: responsiveWidth(45),
    alignSelf: 'center',
  },
  emailtxt: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: responsiveHeight(3),
    marginTop: responsiveHeight(2),
  },
  btn: {
    marginTop: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7),
  },
});
