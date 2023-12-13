import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {images} from '../../../Utlies/Images';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import {colors} from '../../../Utlies/constant/Themes';
import Swiper from 'react-native-swiper';
const Data = [
  {Img: images.categry1},
  {Img: images.categry2},
  {Img: images.categry3},
  {Img: images.categry4},
  {Img: images.categry4},
];
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom']}>
      <View style={styles.header}>
        <View style={{top: responsiveHeight(4)}}>
          <FontAwesome6 name="bars-staggered" size={35} color={'#000'} />
        </View>
        <Image
          source={images.Applogo}
          resizeMode="contain"
          style={styles.app_logo}
        />
        <View></View>
      </View>
      <CoustomTextinput
        alignSelf
        style={{
          backgroundColor: 'rgba(224, 237, 222, 0.8)',
          marginTop: responsiveHeight(3),
          // width: responsiveWidth(90),
        }}
        inputIcon={images.search}
        tintColor={colors.AppColor}
        placeholder={'Dogs herb'}
      />
      <ScrollView>
        <>
          <View
            style={{
              height: responsiveHeight(22),
              width: responsiveWidth(90),
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: responsiveHeight(2),
              justifyContent: 'center',
            }}>
            <Swiper
              paginationStyle={{top: responsiveHeight(22)}}
              activeDotColor={colors.AppColor}
              activeDotStyle={{width: responsiveWidth(4)}}>
              <View>
                <Image
                  source={images.dog}
                  resizeMode="cover"
                  style={styles.slide_1}
                />
              </View>
              <View style={[styles.slide_1, {elevation: 4}]}>
                <Image
                  source={images.dog1}
                  resizeMode="contain"
                  style={styles.slide_1}
                />
              </View>
              <View style={[styles.slide_1, {elevation: 4}]}>
                <Image
                  source={images.dog3}
                  resizeMode="contain"
                  style={styles.slide_1}
                />
              </View>
            </Swiper>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: responsiveWidth(6),
              marginTop: responsiveHeight(1),
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  color: '#000',
                  fontSize: responsiveFontSize(2.2),
                }}>
                Categories
              </Text>
            </View>

            <TouchableOpacity>
              <Text
                style={{
                  color: colors.AppColor,
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'Poppins-Regular',
                }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Data}
              contentContainerStyle={{
                gap: responsiveWidth(5),
                paddingHorizontal: responsiveWidth(3),
                marginTop: responsiveHeight(1),
              }}
              renderItem={({item, index}) => {
                return (
                  <View style={{flex: 1}}>
                    <TouchableOpacity>
                      <Image
                        source={item.Img}
                        resizeMode="contain"
                        style={{
                          height: responsiveWidth(20),
                          width: responsiveWidth(20),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  app_logo: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    marginTop: responsiveHeight(3),
    right: responsiveWidth(3),
  },
  slide_1: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(5),
  },
});
