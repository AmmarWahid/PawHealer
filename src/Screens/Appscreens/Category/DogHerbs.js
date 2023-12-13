import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../Utlies/constant/Themes';
import {images} from '../../../Utlies/Images';
import App from '../../../../App';

const DogHerbs = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 0.17}}>
        <Header Heading={'Dog Herbs'} color={'#fff'} />
      </View>

      <View style={{flex: 0.83}}>
        <View style={styles.content}>
          <View style={styles.lebal_contain}>
            <View>
              <Text style={styles.label}>Bladder</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.view_more}>View More</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3]}
            contentContainerStyle={styles.bladder}
            renderItem={({item, index}) => {
              return (
                <View style={{flex: 1}}>
                  <View style={styles.f_container}>
                    <View style={styles.image_contain}>
                      <Image
                        source={images.mask}
                        resizeMode="contain"
                        style={styles.image}
                      />
                    </View>
                    <View>
                      <View>
                        <Text style={styles.item_name}>Bladder Control</Text>
                      </View>
                    </View>

                    <View style={styles.price_icon}>
                      <Text style={styles.price}>$12.00</Text>

                      <Image
                        source={images.heart}
                        resizeMode="contain"
                        style={{
                          height: responsiveWidth(2),
                          height: responsiveHeight(2),
                        }}
                      />
                    </View>
                    <View style={styles.plus}>
                      <Image source={images.plus} style={styles.icon} />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.Emotions}>
          <View style={styles.lebal_contain}>
            <View>
              <Text style={styles.label}>Emotions</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.view_more}>View More</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3]}
            contentContainerStyle={styles.bladder}
            renderItem={({item, index}) => {
              return (
                <View style={{flex: 1}}>
                  <View style={styles.f_container}>
                    <View style={styles.image_contain}>
                      <Image
                        source={images.mask}
                        resizeMode="contain"
                        style={styles.image}
                      />
                    </View>
                    <View>
                      <View>
                        <Text style={styles.item_name}>Cough Center</Text>
                      </View>
                    </View>

                    <View style={styles.price_icon}>
                      <Text style={styles.price}>$12.00</Text>

                      <Image
                        source={images.heart}
                        resizeMode="contain"
                        style={{
                          height: responsiveWidth(2),
                          height: responsiveHeight(2),
                        }}
                      />
                    </View>
                    <View style={styles.plus}>
                      <Image
                        resizeMode="contain"
                        source={images.plus}
                        style={styles.icon}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DogHerbs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  content: {
    marginHorizontal: responsiveWidth(1),
    paddingVertical: responsiveHeight(1),
    // overflow: 'hidden',
  },
  lebal_contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  bladder: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(1),
    // paddingVertical: responsiveHeight(2),
    // marginTop: responsiveHeight(-1),
    paddingBottom: responsiveHeight(4),
  },
  f_container: {
    // height: responsiveScreenWidth(60),

    // width: responsiveScreenWidth(45),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#ffff',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    padding: 10,
  },
  image_contain: {
    alignItems: 'center',
    height: responsiveHeight(20),
    width: responsiveWidth(31),
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: responsiveWidth(0.2),
    // borderColor: colors.AppColor,
    // borderRadius: responsiveWidth(3),
    // marginTop: responsiveHeight(1),
  },
  image: {
    height: responsiveHeight(20),
    width: responsiveWidth(30),
    // backgroundColor: 'red',
  },
  item_name: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontWeight: '500',
    fontSize: responsiveFontSize(1.9),
    left: responsiveWidth(3),
    // backgroundColor: 'red',
    // paddingTop: responsiveWidth(2),
  },

  price_icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2.5),
    // backgroundColor: 'red',
  },
  price: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  plus: {
    // top: responsiveHeight(1),
    alignSelf: 'center',
    // elevation: 5,
    // backgroundColor: 'red',
    marginTop: responsiveHeight(1),
    // paddingBottom: responsiveHeight(1),
  },
  icon: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
  },
  label: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  view_more: {
    fontSize: responsiveFontSize(1.3),
    fontFamily: 'Poppins-Regular',
    color: colors.AppColor,
    right: responsiveWidth(2),
  },
  Emotions: {
    // bottom: responsiveHeight(1),
    marginHorizontal: responsiveWidth(1),
  },
});
