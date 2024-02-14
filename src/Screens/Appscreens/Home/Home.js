import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
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
  {id: 1, Img: images.categry1, img_1: images.herbs1},
  {id: 2, Img: images.categry3, img_1: images.herbs2},
  {id: 3, Img: images.categry4, img_1: images.herbs3},
  {id: 4, Img: images.categry2, img_1: images.herbs4},
  {id: 5, Img: images.categry5, img_1: images.herbs1},
];
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} edges={['bottom']}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={{top: responsiveHeight(4)}}>
          <Entypo name="menu" size={35} color={'#000'} />
        </TouchableOpacity>
        <Image
          source={images.Applogo}
          resizeMode="contain"
          style={styles.app_logo}
        />
      </View>
      <CoustomTextinput
        alignSelf
        style={{
          backgroundColor: 'rgba(224, 237, 222, 0.8)',
          marginTop: responsiveHeight(3),
        }}
        inputIcon={images.search}
        tintColor={colors.AppColor}
        placeholder={'Dogs herb'}
      />

      <View style={{}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: responsiveHeight(30)}}
          style={{flexGrow: 1}}>
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

            <View style={styles.label_btn_contain}>
              <View>
                <Text style={styles.label}>Categories</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.view_more}>View More</Text>
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
                      <TouchableOpacity
                        onPress={() => {
                          item.id === 1
                            ? navigation.navigate('Dog')
                            : item.id === 2
                            ? navigation.navigate('Catherb')
                            : item.id === 3
                            ? navigation.navigate('Products')
                            : item.id === 4
                            ? alert('on working')
                            : item.id === 5
                            ? navigation.navigate('Supplements')
                            : null;
                        }}>
                        <Image
                          source={item.Img}
                          resizeMode="contain"
                          style={{
                            height: responsiveWidth(18),
                            width: responsiveWidth(18),
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>

            <View>
              <Image
                source={images.bannercoustom}
                resizeMode="cover"
                style={{
                  height: responsiveHeight(22),
                  width: responsiveWidth(90),
                  borderRadius: responsiveWidth(5),
                  alignSelf: 'center',
                  marginTop: responsiveHeight(3),
                }}
              />
            </View>
            <View style={styles.label_btn_contain}>
              <View>
                <Text style={styles.label}>Favorite Products</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.view_more}>View More</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
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
                          source={item.img_1}
                          resizeMode="contain"
                          style={{
                            height: responsiveWidth(23),
                            width: responsiveWidth(23),
                          }}
                        />
                        <View>
                          <Text
                            style={{
                              fontSize: responsiveFontSize(1.5),
                              fontFamily: 'Poppins-Bold',
                              color: '#000',
                              marginTop: responsiveHeight(1),
                            }}>
                            Dogs herbs
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </>
        </ScrollView>
      </View>
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
  label: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: responsiveFontSize(2.2),
  },
  label_btn_contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(6),
    marginTop: responsiveHeight(1),
  },
  view_more: {
    color: colors.AppColor,
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Regular',
  },
});
