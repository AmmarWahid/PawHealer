import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import Dummy from './../../../Assets/Dummy.jpg';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/Images';
import {useDispatch} from 'react-redux';
import {useGetmeMutation} from '../../../Store/Main';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [Getme, {data, status, isLoading}] = useGetmeMutation();
  useLayoutEffect(() => {
    Getme();
  }, []);
  console.log('data', data?.data?.details, status);
  const handleLogout = () => {
    dispatch({type: 'LOGOUT', payload: null});
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header
        Heading={'Profile'}
        color={'#fff'}
        navigation={() => navigation.goBack()}
      />

      <View style={styles.profilecontain}>
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(5),
            alignItems: 'center',
          }}>
          <View>
            <Image source={Dummy} style={styles.profileimg} />
          </View>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={'green'} />
          ) : (
            <View>
              <Text style={styles.name}>{data?.data?.name}</Text>
              <Text numberOfLines={1} style={styles.nametxt}>
                {data?.data?.email}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          // flex: 0.43,
          height: '40%',
          //   backgroundColor: 'red',
          paddingTop: responsiveHeight(3),
        }}>
        <View style={styles.btncontain}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.editprofile} style={styles.btnicon} />

              <Text style={styles.btntxt}>Edit profile</Text>
            </View>
            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}
            style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.notification} style={styles.btnicon} />

              <Text style={styles.btntxt}>Notification</Text>
            </View>
            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View> 
          </TouchableOpacity>*/}
          <TouchableOpacity style={styles.btnicontxt_contain}>
            <View style={styles.iconcontain}>
              <Image source={images.delete} style={styles.btnicon} />

              <Text style={styles.btntxt}>Delete Account</Text>
            </View>

            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnicontxt_contain}
            onPress={handleLogout}>
            <View style={styles.iconcontain}>
              <Image source={images.logout} style={styles.btnicon} />

              <Text style={styles.btntxt}>Logout</Text>
            </View>

            <View>
              <Image source={images.leftarrow} style={styles.btnarrow} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilehead: {
    height: '17%',
    paddingTop: responsiveHeight(3),
  },
  profilecontain: {
    borderWidth: responsiveWidth(0.1),
    marginHorizontal: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveWidth(6),
    marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(3),
  },
  name: {
    fontSize: responsiveFontSize(2.7),
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  nametxt: {
    fontSize: responsiveFontSize(1.7),
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    width: responsiveWidth(60),
  },
  profileimg: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
    borderRadius: responsiveWidth(9),
  },
  btncontain: {
    borderWidth: responsiveWidth(0.1),
    marginHorizontal: responsiveWidth(5),
    // height: '100%',
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
