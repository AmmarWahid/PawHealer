import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import Dummy from './../../../Assets/Dummy.jpg';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/Images';

const Thinkstoknow = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <View style={{flex: 0.17}}>
        <Header Heading={'Things to Know'} color={'#fff'} />
      </View>

      <View
        style={{
          flex: 0.4,
          paddingTop: responsiveHeight(3),
        }}>
        <View style={styles.btncontain}>
          <View style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.quality} style={styles.btnicon} />

              <Text style={styles.btntxt}>Quality and Safety</Text>
            </View>
            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </View>
          <View style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.shipping} style={styles.btnicon} />

              <Text style={styles.btntxt}>Shipping</Text>
            </View>
            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </View>
          <View style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.return} style={styles.btnicon} />

              <Text style={styles.btntxt}>Returns</Text>
            </View>

            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </View>
          <View style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.Privacy} style={styles.btnicon} />

              <Text style={styles.btntxt}>Privacy Policy</Text>
            </View>

            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Thinkstoknow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  btncontain: {
    borderWidth: responsiveWidth(0.1),
    marginHorizontal: responsiveWidth(5),
    height: '100%',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
  },
  btnicon: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
  },
  btntxt: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  btnarrow: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
  },
  btnicontxt_contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveWidth(2),
  },
  iconcontain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(5),
  },
});
