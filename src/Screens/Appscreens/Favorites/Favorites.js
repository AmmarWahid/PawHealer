import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {images} from '../../../Utlies/Images';
import {colors} from '../../../Utlies/constant/Themes';
import {useGetAllfavQuery} from '../../../Store/Main';

const Favorites = ({navigation}) => {
  const {data} = useGetAllfavQuery();

  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header Heading={'Favorites'} color={'#fff'} />
      <View
        style={{
          // flex: 0.99,
          marginTop: responsiveHeight(2),
          backgroundColor: 'transparent',
        }}>
        <FlatList
          data={data?.data?.data}
          contentContainerStyle={{paddingBottom: responsiveHeight(10)}}
          renderItem={({item, index}) => {
            return (
              <View style={styles.data_container}>
                <View style={styles.data_content}>
                  <View style={styles.fav_img}>
                    <Image
                      source={images.mask}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(10),
                      }}
                    />
                  </View>

                  <View style={styles.right_content}>
                    <View>
                      <Text style={styles.label}>Bladder Irritation</Text>
                      <Text style={styles.disc}>
                        Vivamus urna turpis, tempus ut
                      </Text>
                    </View>
                    <View style={styles.rate_btn_contain}>
                      <Text style={styles.rate}>$180.00</Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Productdetail');
                        }}
                        style={styles.btn}>
                        <View>
                          <Image
                            resizeMode="contain"
                            source={images.plusWhite}
                            style={{
                              height: responsiveWidth(5),
                              width: responsiveWidth(5.2),
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.btn_txt}>Add to card</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  data_container: {flex: 1, justifyContent: 'center'},
  data_content: {
    height: responsiveHeight(19),
    // height: '90%',

    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(5),
  },
  fav_img: {
    width: responsiveWidth(29),
    paddingVertical: responsiveHeight(2.5),
    // height: responsiveWidth(2),
    borderWidth: responsiveWidth(0.2),
    borderColor: colors.AppColor,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
  },
  rate: {
    color: colors.AppColor,
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.2,
  },
  label: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: responsiveFontSize(2),
    letterSpacing: 0.5,
  },
  right_content: {
    gap: responsiveHeight(2.6),
    height: responsiveHeight(15),
  },
  disc: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.3),
    color: 'gray',
  },
  btn: {
    height: responsiveHeight(5),
    width: responsiveWidth(35),
    // paddingHorizontal: responsiveWidth(),
    borderRadius: responsiveWidth(1),
    backgroundColor: colors.AppColor,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
  },
  rate_btn_contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: responsiveWidth(6),
    paddingTop: responsiveWidth(2),
  },
  btn_txt: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    top: 2,
  },
});
