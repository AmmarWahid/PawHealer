import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DiscriptionText} from '../../Common/Coustomtext/Index';
import {useForm} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomButton from '../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../Utlies/constant/Themes';
import {images} from '../../Utlies/Images';
import Fields from '../../Common/Fields/Fields';
import {SafeAreaView} from 'react-native-safe-area-context';

const Recoverpassword = ({navigation}) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />

      <Image
        resizeMode="contain"
        source={images.Applogo}
        style={styles.Applogo}
      />

      <View style={{alignSelf: 'center', right: responsiveWidth(2)}}>
        <View>
          <Text style={styles.heading}>Recover Password</Text>
        </View>

        <DiscriptionText
          children={'Please enter Password'}
          color={'rgba(128, 116, 116, 1)'}
          textStyle={{
            fontSize: responsiveFontSize(1.7),
            top: responsiveHeight(1),
          }}
        />
      </View>
      <View
        style={
          {
            //   marginTop: responsiveHeight(10),
            //   marginBottom: responsiveHeight(5),
          }
        }>
        <Fields
          control={control}
          name={'password'}
          placeholder={'New Password'}
          inputIcon={images.passwordIcon}
          secureTextEntry={true}
          inputWidht={responsiveWidth(80)}
          alignSelf
          rules={{
            required: {value: true, message: 'Please enter Password...'},
          }}
          error={errors}
          errorstyle={{left: responsiveWidth(10)}}
          errorcolor={'red'}
          style={{backgroundColor: 'rgba(224, 237, 222, 0.8)'}}
          letterSpacing={2}
        />
        <Fields
          control={control}
          name={'confirmPassword'}
          placeholder={'Confirm New Password'}
          inputIcon={images.passwordIcon}
          secureTextEntry={true}
          inputWidht={responsiveWidth(80)}
          style={{
            marginTop: responsiveHeight(2),
            backgroundColor: 'rgba(224, 237, 222, 0.8)',
          }}
          alignSelf
          rules={{
            required: {value: true, message: 'Please enter Password...'},
          }}
          error={errors}
          errorstyle={{left: responsiveWidth(10)}}
          errorcolor={'red'}
          letterSpacing={2}
        />
        <CoustomButton
          bgcolor={colors.AppColor}
          text={'Recover Password'}
          textcolor={'#fff'}
          onPress={() => {
            navigation.navigate('Login');
          }}
          width={responsiveWidth(80)}
          style={{
            marginTop: responsiveHeight(5),
            borderRadius: responsiveWidth(10),
          }}
          self
        />
      </View>
    </SafeAreaView>
  );
};

export default Recoverpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    gap: responsiveHeight(7),
    paddingTop: responsiveHeight(6),
  },
  heading: {
    fontSize: responsiveFontSize(4.5),
    color: '#000',
    fontWeight: '700',
  },
  Applogo: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    alignSelf: 'center',
    top: responsiveHeight(2),
  },
});
