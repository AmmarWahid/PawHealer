import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomButton from '../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../Utlies/constant/Themes';
import COTP from '../../Common/CoustomOTP/CoustomOTP';
import {useForm} from 'react-hook-form';
import {images} from '../../Utlies/Images';

const Otp = ({navigation}) => {
  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        gap: responsiveHeight(4),
        top: responsiveHeight(5),
        backgroundColor: '#fff',
      }}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Image
        resizeMode="contain"
        source={images.Applogo}
        style={styles.Applogo}
      />
      <View style={styles.headingcontain}>
        <Text style={styles.heading}>OTP Verification</Text>

        <Text style={styles.firstHtxt}>
          {'Enter the verification code we just sent on your\nemail addresst'}
        </Text>
      </View>
      <View>
        <COTP control={control} />
      </View>

      <View>
        <CoustomButton
          bgcolor={colors.AppColor}
          text={'Verify'}
          textcolor={'#fff'}
          onPress={() => {
            navigation.navigate('Recoverpassword');
          }}
          self
          height={responsiveHeight(5)}
          width={responsiveWidth(60)}
          style={{marginTop: responsiveHeight(5)}}
        />

        {/* <NormalText
          children={'Didn’t recieve a verification code?'}
          color={'#fff'}
          center
          textStyle={{marginTop: responsiveHeight(4)}}
        /> */}
        {/* <TouchableOpacity onPress={onPress}>
          <DiscriptionText
            children={'Didn’t recieve a verification code?'}
            color={'red'}
            center
            textStyle={{marginTop: responsiveHeight(2)}}
          />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  txtnumber: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  firstHtxt: {
    color: 'rgba(128, 116, 116, 1)',
    fontSize: responsiveFontSize(1.7),
    fontWeight: '600',
  },
  heading: {
    fontSize: responsiveFontSize(5.2),
    color: '#000',
    fontWeight: '700',
  },

  Applogo: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    alignSelf: 'center',
    // top: responsiveHeight(8),
  },
  headingcontain: {
    left: responsiveWidth(8),
  },
});
