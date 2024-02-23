import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import App from '../../../../App';
import {colors} from '../../../Utlies/constant/Themes';
import {images} from '../../../Utlies/Images';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import StarRating from 'react-native-star-rating-widget';
import {useDispatch, useSelector} from 'react-redux';
import {setorder} from '../../../Store/Slice';

const Coustom3 = ({navigation, route}) => {
  const [selected, setSelected] = useState(0);

  //   const {productItem} = route?.params;
  const btns = useCallback(val => {
    setSelected(val);
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const placeholderData = Array(5).fill({});
  const initialRatings = Array(placeholderData.length).fill(0);
  const [rating, setRating] = useState(initialRatings);
  const [value, setValue] = useState(1);
  const [totalprice, setTotalprice] = useState(6);
  // console.log('productItem', productItem);
  const dispatch = useDispatch();
  let net = 100 * value;
  //   const {order} = useSelector(state => state.Slice);
  //   // console.log('orderproduct', order);
  //   let net = productItem.price * value;

  //   const handleAddtoCart = () => {
  //     const product = {
  //       ...productItem,
  //       Quantity: value,
  //       totalprice: net,
  //     };

  //     dispatch(setorder(product));
  //     navigation.goBack();
  //   };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffff'}}
      edges={['bottom']}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Header
        Heading={'Custom Blending'}
        color={'#fff'}
        navigation={() => navigation.goBack()}
      />
      <View style={{marginBottom: responsiveHeight(5)}}>
        <ScrollView style={{flexGrow: 1}}>
          <View style={styles.Swiper_contain}>
            <Swiper paginationStyle={{marginRight: responsiveWidth(50)}}>
              <View style={styles.slide1}>
                <Image
                  source={images.mask}
                  resizeMode="contain"
                  style={styles.slide_img}
                />
              </View>
              <View style={styles.slide1}>
                <Image
                  source={images.mask}
                  resizeMode="contain"
                  style={styles.slide_img}
                />
              </View>
              <View style={styles.slide1}>
                <Image
                  source={images.mask}
                  resizeMode="contain"
                  style={styles.slide_img}
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.heading_contain}>
            <Text
              numberOfLines={1}
              style={[
                styles.heading,
                {
                  width: responsiveWidth(60),
                },
              ]}>
              Coustom Product
            </Text>
            <Text style={styles.price}>$ 100</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: responsiveWidth(7),
              marginHorizontal: responsiveWidth(6.1),
            }}>
            <TouchableOpacity
              onPress={() => {
                btns(0);
              }}>
              <Text
                style={[
                  styles.discColor,
                  {color: selected == 0 ? colors.AppColor : '#000'},
                ]}>
                Description
              </Text>
            </TouchableOpacity>
          </View>
          {/* description_contain */}

          {selected === 0 && (
            <View>
              <Text style={styles.txt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel ex sit amet neque dignissim mattis non eu est. Etiam
                pulvinar est mi, et porta magna accumsan nec.
              </Text>

              <View style={styles.heading_contain}>
                <View style={styles.btn}>
                  <TouchableOpacity
                    onPress={() => {
                      value == 1 ? null : setValue(value - 1);
                    }}>
                    <Image
                      resizeMode="contain"
                      source={images.minus}
                      style={{
                        height: responsiveWidth(6),
                        width: responsiveWidth(6),
                      }}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.btn_txt}>{value}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(value + 1);
                    }}>
                    <Image
                      resizeMode="contain"
                      source={images.pluscart}
                      style={{
                        height: responsiveWidth(6),
                        width: responsiveWidth(6),
                        zIndex: 9999,
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={styles.heading}>{`Total : $${100}/ea`}</Text>
                </View>
              </View>
              {/* <View style={{marginLeft: responsiveWidth(6)}}>
                <Text style={styles.price}>
                  Save $ {(value * net * 0.1).toFixed(0)}
                </Text>
              </View> */}
              <View>
                <CoustomButton
                  bgcolor={colors.AppColor}
                  fontFamily={'Poppins-Bold'}
                  text={'Procced'}
                  textcolor={'#ffff'}
                  onPress={() => {
                    navigation.navigate('HomeScreen');
                  }}
                  style={{
                    height: responsiveHeight(6.5),
                    marginTop: responsiveHeight(1),
                    marginHorizontal: responsiveWidth(6),
                    marginBottom: responsiveHeight(17),
                  }}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Coustom3;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    height: responsiveHeight(42),
    marginHorizontal: responsiveWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: responsiveWidth(0.3),
    borderColor: colors.AppColor,
    borderRadius: responsiveWidth(3),
    overflow: 'hidden',
  },

  slide_img: {
    height: responsiveHeight(100),
    width: responsiveWidth(25),
  },
  Swiper_contain: {
    height: responsiveHeight(42),
    marginTop: responsiveHeight(2),
  },
  heading: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#000',
    letterSpacing: 0.1,
  },
  price: {
    color: colors.AppColor,
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(2),
  },
  heading_contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(5.9),
    marginVertical: responsiveHeight(2),
    alignItems: 'center',
  },
  discColor: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Bold',
  },
  txt: {
    color: '#000',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(6),
  },
  btn: {
    height: responsiveHeight(5),
    width: responsiveWidth(30),
    borderRadius: responsiveWidth(1),
    // right: responsiveWidth(5.5),
    // overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rate_btn_contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: responsiveWidth(12),
  },
  btn_txt: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    top: 2,
  },
  coustombtn: {
    borderRadius: responsiveWidth(3),
    marginVertical: responsiveHeight(8),
    height: responsiveHeight(6),
    marginHorizontal: responsiveWidth(6),
    marginBottom: responsiveHeight(17),
  },
  star_contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
