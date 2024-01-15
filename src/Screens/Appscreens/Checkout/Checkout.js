import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useForm} from 'react-hook-form';
import Fields from '../../../Common/Fields/Fields';
import {images} from '../../../Utlies/Images';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../../Utlies/constant/Themes';

const Checkout = ({navigation}) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();
  return (
    <SafeAreaView edges={['bottom']} style={{}}>
      <Header
        Heading={'Checkout'}
        color={'#fff'}
        navigation={() => navigation.goBack()}
      />
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View>
        <ScrollView scrollEnabled style={{flexGrow: 1}}>
          <View
            style={{
              marginTop: responsiveHeight(1),
              marginStart: responsiveWidth(3),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                fontFamily: 'Poppins-Bold',
                color: '#000',
              }}>
              Billing Address
            </Text>
          </View>
          <View
            style={{
              height: responsiveHeight(37),
              width: responsiveWidth(90),
              backgroundColor: '#fff',
              elevation: 14,
              borderRadius: responsiveWidth(2),
              alignSelf: 'center',
              marginVertical: responsiveHeight(1),
              gap: responsiveHeight(1),
              paddingTop: responsiveHeight(2.5),
            }}>
            <Fields
              error={errors}
              errorcolor={'red'}
              alignSelf={true}
              control={control}
              name={'address'}
              style={{
                backgroundColor: '#fff',
                borderWidth: responsiveWidth(0.3),
                width: responsiveWidth(80),
                borderColor: 'gray',
              }}
              placeholder={'Address'}
              textbgcolor={'#000'}
            />
            <Fields
              error={errors}
              errorcolor={'red'}
              alignSelf={true}
              control={control}
              name={'address'}
              style={{
                backgroundColor: '#fff',
                borderWidth: responsiveWidth(0.3),
                width: responsiveWidth(80),
                borderColor: 'gray',
              }}
              placeholder={'City'}
              textbgcolor={'#000'}
            />
            <Fields
              error={errors}
              errorcolor={'red'}
              alignSelf={true}
              control={control}
              name={'address'}
              style={{
                backgroundColor: '#fff',
                borderWidth: responsiveWidth(0.3),
                width: responsiveWidth(80),
                borderColor: 'gray',
              }}
              placeholder={'Phone number'}
              textbgcolor={'#000'}
              bordercolor={'#000'}
              secureTextEntry={true}
            />
            <Fields
              error={errors}
              errorcolor={'red'}
              alignSelf={true}
              control={control}
              name={'address'}
              style={{
                backgroundColor: '#fff',
                borderWidth: responsiveWidth(0.3),
                width: responsiveWidth(80),
                borderColor: 'gray',
              }}
              placeholder={'State'}
              textbgcolor={'#000'}
              bordercolor={'#000'}
            />
            <Fields
              error={errors}
              errorcolor={'red'}
              alignSelf={true}
              control={control}
              name={'address'}
              secureTextEntry={true}
              style={{
                backgroundColor: '#fff',
                borderWidth: responsiveWidth(0.3),
                width: responsiveWidth(80),
                borderColor: 'gray',
              }}
              placeholder={'ZIP Code'}
              textbgcolor={'#000'}
              bordercolor={'#000'}
            />
          </View>
          <View
            style={{
              marginTop: responsiveHeight(1),
              marginStart: responsiveWidth(3),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                fontFamily: 'Poppins-Bold',
                color: '#000',
              }}>
              Billing information
            </Text>
          </View>

          <View
            style={{
              height: responsiveHeight(18),
              width: responsiveWidth(90),
              backgroundColor: '#fff',
              elevation: 14,
              borderRadius: responsiveWidth(2),
              alignSelf: 'center',
              marginVertical: responsiveHeight(1),
              gap: responsiveHeight(1),
              paddingTop: responsiveHeight(2.5),
            }}>
            <View style={styles.txt_1_Contain}>
              <Text style={styles.txt_1}>Delivery Fee : </Text>
              <Text style={[styles.txt_1, {color: '#000'}]}>$ 20</Text>
            </View>
            <View style={styles.txt_1_Contain}>
              <Text style={styles.txt_1}>Subtotal :</Text>
              <Text style={[styles.txt_1, {color: '#000'}]}>$ 36</Text>
            </View>
            <View
              style={[styles.txt_1_Contain, {marginTop: responsiveHeight(2)}]}>
              <Text style={styles.txt_1}>Total :</Text>
              <Text style={[styles.txt_1, {color: '#000'}]}>$ 40,00</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: responsiveHeight(1),
              marginStart: responsiveWidth(3),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                fontFamily: 'Poppins-Bold',
                color: '#000',
              }}>
              Payment Method
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingStart: responsiveWidth(3),
            }}>
            <Image
              resizeMode="contain"
              source={images.card1}
              style={{height: responsiveWidth(13), width: responsiveWidth(13)}}
            />
            <Image
              resizeMode="contain"
              source={images.card2}
              style={{height: responsiveWidth(13), width: responsiveWidth(13)}}
            />
            <Image
              resizeMode="contain"
              source={images.card3}
              style={{height: responsiveWidth(13), width: responsiveWidth(13)}}
            />
          </View>
          <CoustomButton
            bgcolor={colors.AppColor}
            self
            text={'Swipe for Payment'}
            textcolor={'#fff'}
            width={responsiveWidth(80)}
            style={{
              borderRadius: responsiveWidth(10),
              marginTop: responsiveHeight(4),
              marginBottom: responsiveHeight(40),
            }}
            onPress={() => alert('Stripe-Section')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
  },
  txt_1: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
  },
  txt_1_Contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
    fontFamily: 'Poppins-Bold',
  },
});
