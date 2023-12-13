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

const Forgetpassword = () => {
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
          <Text style={styles.heading}>Forget Password?</Text>
        </View>

        <DiscriptionText
          children={'Please enter your registered email '}
          color={'rgba(128, 116, 116, 1)'}
          textStyle={{
            fontSize: responsiveFontSize(1.7),
            top: responsiveHeight(1),
          }}
        />
      </View>
      <View style={{}}>
        <Fields
          control={control}
          name={'email'}
          placeholder={'Email/Phone Number'}
          inputIcon={images.email}
          alignSelf
          rules={{
            required: {value: true, message: 'Please enter email...'},
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email is not Valid',
            },
          }}
          style={{backgroundColor: 'rgba(224, 237, 222, 0.8)'}}
          error={errors}
          errorstyle={{left: responsiveWidth(10)}}
          errorcolor={'red'}
        />
        <CoustomButton
          bgcolor={colors.AppColor}
          text={'Recover Password'}
          textcolor={'#fff'}
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

export default Forgetpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    gap: responsiveHeight(10),
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
