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

const Login = ({navigation}) => {
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
            fontSize: responsiveFontSize(5),
            fontWeight: '600',
          }}>
          Sign in
        </Text>
        <Text
          style={{
            color: 'rgba(128, 116, 116, 1)',
            fontSize: responsiveFontSize(1.6),
          }}>
          Login to your account
        </Text>
      </View>
      <View style={styles.content}>
        <Fields
          error={errors}
          errorcolor={'red'}
          alignSelf={true}
          control={control}
          name={'email'}
          style={{backgroundColor: 'rgba(224, 237, 222, 0.8)'}}
          inputIcon={images.email}
          placeholder={'Enter email'}
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
        <TouchableOpacity
          style={{width: responsiveWidth(80), alignSelf: 'center'}}>
          <Text style={styles.forgetpass}>Forget Password ?</Text>
        </TouchableOpacity>

        <View>
          <CoustomButton
            bgcolor={colors.AppColor}
            self
            text={'Login'}
            textcolor={'#fff'}
            width={responsiveWidth(80)}
            style={{
              borderRadius: responsiveWidth(10),
              marginTop: responsiveHeight(4),
            }}
            onPress={() => navigation.navigate('DrawerStacks')}
          />
        </View>
        <View style={styles.signuptxt}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              color: '#000',
              fontWeight: '500',
            }}>
            If you don’t have an account? {}
            <Text
              style={{
                fontSize: responsiveFontSize(1.7),
                color: colors.AppColor,
              }}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    gap: responsiveHeight(2),
  },
  header: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Applogo: {
    height: responsiveWidth(35),
    width: responsiveWidth(35),
  },
  content: {
    flex: 0.6,
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
  },
});
