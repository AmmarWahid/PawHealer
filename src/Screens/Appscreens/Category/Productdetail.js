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

const Productdetail = ({navigation}) => {
  const [selected, setSelected] = useState(0);
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
        Heading={'Product Detail'}
        color={'#fff'}
        navigation={() => navigation.goBack()}
      />
      <View style={{marginBottom: responsiveHeight(5)}}>
        <ScrollView>
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
            <Text style={styles.heading}>Clears Bladder Damp-Heat</Text>
            <Text style={styles.price}>$45</Text>
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
            <TouchableOpacity
              onPress={() => {
                btns(1);
              }}>
              <Text
                style={[
                  styles.discColor,
                  {color: selected == 1 ? colors.AppColor : '#000'},
                ]}>
                Review
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
                  <TouchableOpacity>
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
                    <Text style={styles.btn_txt}>1</Text>
                  </View>
                  <TouchableOpacity>
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
                  <Text style={styles.heading}>Total : $35.99/ea</Text>
                </View>
              </View>
              <View>
                <CoustomButton
                  bgcolor={colors.AppColor}
                  fontFamily={'Poppins-Bold'}
                  text={'Add to cart'}
                  textcolor={'#ffff'}
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={{
                    height: responsiveHeight(6.5),
                    marginTop: responsiveHeight(1),
                    marginHorizontal: responsiveWidth(6),
                    marginBottom: responsiveHeight(10),
                  }}
                />
              </View>
            </View>
          )}
          {/* ==>>>>>>>><<<<<<<======= */}
          {/* review contain */}
          {selected === 1 && (
            <View>
              <View
                style={{
                  marginHorizontal: responsiveWidth(6),
                  gap: responsiveHeight(1),
                }}>
                <Fields
                  letterSpacing={0.5}
                  error={errors}
                  errorcolor={'red'}
                  control={control}
                  name={'ShortDiscription'}
                  style={{
                    backgroundColor: 'rgba(224, 237, 222, 0.8)',
                    marginTop: responsiveHeight(1.5),
                    height: responsiveHeight(10),
                  }}
                  multiline={true}
                  inputstyle={{
                    height: responsiveHeight(10),
                    fontSize: responsiveFontSize(1.4),
                  }}
                  placeholder={'Short-Discription'}
                  textbgcolor={'#000'}
                />
                <Fields
                  letterSpacing={0.5}
                  error={errors}
                  errorcolor={'red'}
                  control={control}
                  name={'longDiscription'}
                  style={{
                    backgroundColor: 'rgba(224, 237, 222, 0.8)',
                    marginTop: responsiveHeight(1.5),
                    height: responsiveHeight(15),
                  }}
                  multiline={true}
                  inputstyle={{
                    height: responsiveHeight(15),
                    fontSize: responsiveFontSize(1.4),
                  }}
                  placeholder={'Long-Discription'}
                  textbgcolor={'#000'}
                />
                <View style={styles.star_contain}>
                  <Text style={[styles.heading, {top: responsiveHeight(0.2)}]}>
                    Review
                  </Text>
                  <StarRating
                    rating={rating}
                    onChange={value => setRating(value)}
                    // activeColor=""
                    activeSize={20}
                    // inactiveColor="#fff"
                    inactiveSize={20}
                    spacing={2}
                    fillAnimation={false}
                    enableSwiping={false}
                    starStyle={{marginHorizontal: -1, opacity: 0.9}}
                    color="orange"
                    animationConfig={{
                      delay: 100,
                      duration: 100,
                      scale: 1,
                    }}
                    enableHalfStar={false}
                  />
                </View>
              </View>

              <CoustomButton
                bgcolor={colors.AppColor}
                text={'Send Request'}
                style={styles.coustombtn}
                textcolor={'#fff'}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Productdetail;

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
    marginVertical: responsiveHeight(2),
    height: responsiveHeight(6),
    marginHorizontal: responsiveWidth(6),
    marginBottom: responsiveHeight(10),
  },
  star_contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
