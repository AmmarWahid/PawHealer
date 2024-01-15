import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../Utlies/Images';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../Utlies/constant/Themes';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header
        Heading={'Notification'}
        color={'#fff'}
        navigation={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.headingcontain}>
        <Text style={styles.heading}> New Notification</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6]}
          style={{}}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1}}>
                <View style={styles.content}>
                  <View>
                    <Image
                      source={images.Notifications}
                      style={styles.Notificationsicons}
                    />
                  </View>

                  <View style={{paddingRight: responsiveWidth(4)}}>
                    <Text style={styles.notificationheadings}>
                      Hurrey, You've riched your IK
                    </Text>
                    <Text style={styles.notificationtxt}>
                      Lorem ipsum dolor sit amet, adipiscing elit, sed.Lorem
                      ipsum dolor sit amet, adipiscing elit, sed.
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: colors.AppColor}}>5 mins</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        {/* <View></View> */}
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontWeight: '500',
    paddingLeft: responsiveWidth(3),
  },
  headingcontain: {
    flex: 0.08,
    justifyContent: 'center',
    height: '100%',
    borderBottomWidth: responsiveWidth(0.2),
  },
  Notificationsicons: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
  },
  content: {
    paddingVertical: responsiveHeight(2),
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationheadings: {
    color: '#000',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'Poppins-Regular',
  },
  notificationtxt: {
    color: '#000',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'Poppins-Regular',
    maxWidth: responsiveWidth(60),
  },
});
