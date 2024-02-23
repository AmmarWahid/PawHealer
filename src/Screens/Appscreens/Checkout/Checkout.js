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
import {useDispatch, useSelector} from 'react-redux';
import {useCreateorderMutation} from '../../../Store/Main';
import useToast from '../../../Hooks';
import {setorderclean} from '../../../Store/Slice';

const Checkout = ({navigation, route}) => {
  const {total} = route.params || {};
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();
  const {order} = useSelector(state => state.Slice);
  const [createOrder, {status, isLoading}] = useCreateorderMutation();
  const dispatch = useDispatch();
  const updated = order.map(i => {
    return {
      product_id: i.id,
      quantity: i.Quantity,
    };
  });
  const {showToast} = useToast();
  const onsubmit = async value => {
    const body = {
      ...value,
      order_products: updated,
    };
    console.log('first', body);
    try {
      const res = await createOrder(body);
      console.log('res', res.data?.message);
      if (res?.data?.success) {
        showToast('success', '👍', res?.data?.message, 5000);
        navigation.navigate('TabStacks');
        dispatch(setorderclean());
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              name={'billing_address'}
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
              name={'city'}
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
              name={'phone'}
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
              name={'state'}
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
              name={'zip'}
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
              <Text style={[styles.txt_1, {color: '#000'}]}>$ 0</Text>
            </View>
            <View style={styles.txt_1_Contain}>
              <Text style={styles.txt_1}>Subtotal :</Text>
              <Text style={[styles.txt_1, {color: '#000'}]}>$ 0</Text>
            </View>
            <View
              style={[styles.txt_1_Contain, {marginTop: responsiveHeight(2)}]}>
              <Text style={styles.txt_1}>Total :</Text>
              <Text style={[styles.txt_1, {color: '#000'}]}>$ {total}</Text>
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
            loading={isLoading}
            style={{
              borderRadius: responsiveWidth(10),
              marginTop: responsiveHeight(4),
              marginBottom: responsiveHeight(40),
            }}
            onPress={handleSubmit(onsubmit)}
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
