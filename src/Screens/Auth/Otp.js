import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import CoustomButton from '../../Common/CoustomButton.js/CoustomButton';
import COTP from '../../Common/CoustomOTP/CoustomOTP';
import {images} from '../../Utlies/Images';
import {colors} from '../../Utlies/constant/Themes';
import {useVerifyOtp} from './useUsers';

const Otp = ({navigation, route}) => {
  const {email} = route?.params || {};
  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();

  const {handleVerifyOtp, isLoading} = useVerifyOtp();

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
          self
          loading={isLoading}
          onPress={handleSubmit(data => handleVerifyOtp(data, email))}
          // loading={isLoading}
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
