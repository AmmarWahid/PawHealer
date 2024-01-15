import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../../Components/Header';
import {images} from '../../../../Utlies/Images';
import {colors} from '../../../../Utlies/constant/Themes';

const Supplements = ({navigation}) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Header
        Heading={'Supplements'}
        color={'#fff'}
        navigation={() => navigation.navigate('HomeScreen')}
      />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: responsiveHeight(2),
          }}
          style={{
            marginTop: responsiveHeight(2),
            paddingBottom: responsiveHeight(15),
            zIndex: 999999,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Nutritionals</Text>
                <TouchableOpacity>
                  <Text style={styles.viewMore}>View More</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  maxHeight: responsiveHeight(32.5),
                }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3]}
                  contentContainerStyle={styles.bladder}
                  renderItem={({item, index}) => {
                    return (
                      <View style={styles.containerItem}>
                        <View style={styles.imageContainer}>
                          <Image
                            source={images.mask}
                            resizeMode="contain"
                            style={styles.image}
                          />
                        </View>
                        <Text style={styles.itemName}>Cough Center</Text>
                        <View style={styles.priceIcon}>
                          <Text style={styles.price}>$12.00</Text>
                          <Image
                            resizeMode="contain"
                            source={images.heart}
                            style={styles.heartIcon}
                          />
                        </View>
                        <TouchableOpacity
                          style={styles.plus}
                          onPress={() => {
                            navigation.navigate('Productdetail');
                          }}>
                          <Image
                            resizeMode="contain"
                            source={images.plus}
                            style={styles.icon}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </View>

            <View>
              <View
                style={[
                  styles.labelContainer,
                  {marginTop: responsiveHeight(5)},
                ]}>
                <Text style={styles.label}>Hip and Joint Saver</Text>
                <TouchableOpacity>
                  <Text style={styles.viewMore}>View More</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  // backgroundColor: 'yellow',
                  maxHeight: responsiveHeight(32.5),
                }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3]}
                  contentContainerStyle={styles.bladder}
                  renderItem={({item, index}) => {
                    return (
                      <View style={styles.containerItem}>
                        <View style={styles.imageContainer}>
                          <Image
                            source={images.mask}
                            resizeMode="contain"
                            style={styles.image}
                          />
                        </View>
                        <Text style={styles.itemName}>Cough Center</Text>
                        <View style={styles.priceIcon}>
                          <Text style={styles.price}>$12.00</Text>
                          <Image
                            resizeMode="contain"
                            source={images.heart}
                            style={styles.heartIcon}
                          />
                        </View>
                        <TouchableOpacity
                          style={styles.plus}
                          onPress={() => {
                            navigation.navigate('Productdetail');
                          }}>
                          <Image
                            resizeMode="contain"
                            source={images.plus}
                            style={styles.icon}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Supplements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
  },
  label: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  viewMore: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    color: colors.AppColor,
  },
  bladder: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    paddingBottom: responsiveHeight(8),
  },
  containerItem: {
    width: responsiveWidth(45),
    height: Dimensions.get('window').height / 3.4,
    borderRadius: responsiveWidth(2),
    backgroundColor: '#ffff',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    padding: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(3),
  },
  imageContainer: {
    alignItems: 'center',
    height: responsiveHeight(15),
    width: '100%',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.2),
    borderColor: colors.AppColor,
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(1.5),
  },
  image: {
    height: responsiveHeight(9),
    width: responsiveWidth(19),
  },
  itemName: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontWeight: '500',
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeight(1),
  },
  priceIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  heartIcon: {
    width: responsiveWidth(5),
  },
  plus: {
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveHeight(26),
  },
  icon: {
    height: responsiveHeight(6),
  },
});
