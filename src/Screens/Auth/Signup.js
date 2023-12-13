import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../../Utlies/Images';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fields from '../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import {
  LargeText,
  MediumText,
  NormalText,
  XXLargeText,
} from '../../Common/Coustomtext/Index';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import CoustomButton from '../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../Utlies/constant/Themes';

const Signup = ({navigation}) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();
  useEffect(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    AvoidSoftInput.setAdjustPan(true);
  }, []);
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={images.Applogo}
          style={styles.Applogo}
        />
        <Text
          style={{
            color: '#000',
            fontSize: responsiveFontSize(3.5),
            fontWeight: '600',
            marginTop: responsiveHeight(1),
          }}>
          Sign up
        </Text>
        <Text
          style={{
            color: 'rgba(128, 116, 116, 1)',
            fontSize: responsiveFontSize(1.1),
            fontWeight: '600',
          }}>
          Create your new account
        </Text>
      </View>
      <View style={styles.content}>
        <Fields
          error={errors}
          errorcolor={'red'}
          alignSelf={true}
          control={control}
          name={'fullname'}
          style={{backgroundColor: 'rgba(224, 237, 222, 0.8)'}}
          inputIcon={images.emailIcon}
          placeholder={'Full Name'}
          textbgcolor={'#000'}
        />

        <Fields
          error={errors}
          errorcolor={'red'}
          alignSelf={true}
          control={control}
          name={'email'}
          style={{
            backgroundColor: 'rgba(224, 237, 222, 0.8)',
            marginTop: responsiveHeight(2),
          }}
          inputIcon={images.email}
          placeholder={'Email'}
          textbgcolor={'#000'}
        />

        <Fields
          error={errors}
          errorcolor={'red'}
          alignSelf={true}
          control={control}
          name={'password'}
          style={{
            backgroundColor: 'rgba(224, 237, 222, 0.8)',
            marginTop: responsiveHeight(2),
          }}
          inputIcon={images.passwordIcon}
          placeholder={'Password'}
          textbgcolor={'#000'}
        />

        <View>
          <CoustomButton
            bgcolor={colors.AppColor}
            self
            text={'Sign Up'}
            textcolor={'#fff'}
            width={responsiveWidth(80)}
            style={{
              borderRadius: responsiveWidth(10),
              marginTop: responsiveHeight(5),
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: responsiveWidth(2),
            marginTop: responsiveHeight(5),
          }}>
          <View style={styles.lineothers}></View>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: responsiveFontSize(1.6),
                fontWeight: '700',
                bottom: responsiveHeight(0.5),
              }}>
              Or continue with
            </Text>
          </View>

          <View style={styles.lineothers}></View>
        </View>
        <View style={styles.otherslogocontain}>
          <Image
            resizeMode="contain"
            style={styles.otherslogo}
            source={images.fblogo}
          />
          <Image
            resizeMode="contain"
            style={styles.otherslogo}
            source={images.google}
          />
        </View>
        {/**=========== */}
        <View style={styles.signuptxt}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              color: '#000',
              fontWeight: '500',
            }}>
            Already have an account? {}
            <Text
              style={{
                fontSize: responsiveFontSize(1.7),
                color: colors.AppColor,
              }}>
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    gap: responsiveHeight(2),
  },
  header: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Applogo: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
  },
  content: {
    flex: 0.65,
  },
  forgetpass: {
    alignSelf: 'flex-end',
    color: 'rgba(61, 98, 55, 1)',
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.7),
    fontWeight: '600',
  },
  signuptxt: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    position: 'absolute',
    bottom: responsiveHeight(1),
  },
  lineothers: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(23.5),
    backgroundColor: '#000',
  },
  otherslogo: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    borderRadius: responsiveWidth(5),
  },
  otherslogocontain: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    gap: responsiveWidth(10),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
});
