import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
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
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../../Utlies/constant/Themes';
import {DiscriptionText} from '../../../Common/Coustomtext/Index';
import {useGetmeMutation} from '../../../Store/Main';

const EditProfile = ({navigation}) => {
  const [Getme, {data, status}] = useGetmeMutation();
  useLayoutEffect(() => {
    Getme();
  }, []);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <View style={{flex: 0.17}}>
        <Header
          Heading={'Edit Profile'}
          color={'#fff'}
          navigation={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.profilehead}>
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(5),
            alignItems: 'center',
          }}>
          <View>
            <Image source={Dummy} style={styles.profileimg} />
          </View>
          <View>
            <Text style={styles.name}>{data?.data?.name}</Text>
            <Text style={styles.nametxt}>{data?.data?.email}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0.66,
        }}>
        <View style={styles.btncontain}>
          <CoustomTextinput
            inputIcon={images.pancil}
            style={styles.txtEdit}
            alignSelf
            placeholder={'Elena Thompson'}
          />
          <CoustomTextinput
            inputIcon={images.pancil}
            style={styles.txtEdit}
            alignSelf
            placeholder={'+880 000 111 333'}
          />
          <CoustomTextinput
            inputIcon={images.pancil}
            style={styles.txtEdit}
            alignSelf
            placeholder={'@elenathompson'}
          />

          <CoustomTextinput
            inputIcon={images.pancil}
            style={styles.txtEdit1}
            alignSelf
            placeholder={'bio'}
            multiline={true}
            numberOfLines={5}
            inputstyle={{
              height: responsiveWidth(18),
            }}
          />
          <CoustomTextinput
            inputIcon={images.pancil}
            style={styles.txtEdit2}
            alignSelf
            placeholder={
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.'
            }
            multiline={true}
            numberOfLines={5}
            inputstyle={{
              height: responsiveWidth(15),
            }}
          />
          <CoustomButton
            bgcolor={colors.AppColor}
            text={'save now'}
            textcolor={'#fff'}
            self
            width={responsiveWidth(80)}
            style={{
              borderRadius: responsiveWidth(6),
              marginTop: responsiveHeight(2.5),
            }}
          />

          <View style={styles.privacycontain}>
            <Text style={styles.privacytxt}>Terms Of Use Privacy Policy</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilehead: {
    flex: 0.15,
    paddingTop: responsiveHeight(3),
    justifyContent: 'center',
    paddingLeft: responsiveWidth(5),
    height: '100%',
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
    marginHorizontal: responsiveWidth(3),
    height: '100%',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.2),
  },
  txtEdit: {
    backgroundColor: 'rgba(224, 237, 222, 0.8)',
    borderRadius: responsiveWidth(6),
    height: responsiveWidth(10),
    paddingLeft: responsiveWidth(1),
    marginTop: responsiveHeight(1.5),

    opacity: 0.8,
  },
  txtEdit1: {
    backgroundColor: 'rgba(224, 237, 222, 0.8)',
    borderRadius: responsiveWidth(4),
    height: responsiveWidth(18),
    paddingLeft: responsiveWidth(1),
    marginTop: responsiveHeight(1.5),
    opacity: 0.8,
  },
  txtEdit2: {
    backgroundColor: 'rgba(224, 237, 222, 0.8)',
    borderRadius: responsiveWidth(4),
    height: responsiveWidth(15),
    paddingLeft: responsiveWidth(1),
    marginTop: responsiveHeight(1.5),
    opacity: 0.8,
  },
  privacycontain: {position: 'absolute', bottom: 5, alignSelf: 'center'},
  privacytxt: {
    color: 'gray',
    fontSize: responsiveFontSize(1.1),
    fontWeight: '500',
  },
});
