import React, {useCallback, useEffect, useState} from 'react';
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
import Header from '../../../Components/Header';
import {images} from '../../../../Utlies/Images';
import {colors} from '../../../Utlies/constant/Themes';
import {data} from './Data';
import Dotcheck from '../../../Common/CoustomCheckbox/Dotcheck';
import {DrawerItem} from '@react-navigation/drawer';
import Boxcheck from '../../../Common/CoustomCheckbox/Checkbox';
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import uplaod from '../../../Assets/upload.png';
import ImagePicker from 'react-native-image-crop-picker';

const Coustom1 = ({navigation, route}) => {
  const [img, setImg] = useState();
  const handle = async () => {
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImg(image);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    return () => setImg(null);
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
      <Header
        Heading={'Custom Blending'}
        color={'#fff'}
        navigation={() => navigation.navigate('HomeScreen')}
      />

      <View style={{marginHorizontal: responsiveWidth(5)}}>
        <View>
          <Fields
            letterSpacing={0.5}
            error={errors}
            errorcolor={'red'}
            label={'Pet Info:'}
            labelStyle={[
              styles.title,
              {
                marginTop: responsiveHeight(1.5),
                fontSize: responsiveFontSize(1.5),
              },
            ]}
            alignSelf={true}
            control={control}
            name={'Pet Name'}
            style={{
              borderWidth: responsiveWidth(0.3),
              marginTop: responsiveHeight(1),
              height: responsiveHeight(6),
              backgroundColor: '#fff',
            }}
            multiline={true}
            inputstyle={{
              height: responsiveHeight(6),
              fontSize: responsiveFontSize(1.4),
            }}
            placeholder={'Pet Name'}
            textbgcolor={'#000'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(2),
          }}>
          <Fields
            letterSpacing={0.5}
            error={errors}
            errorcolor={'red'}
            alignSelf={true}
            control={control}
            name={'Age'}
            style={{
              borderWidth: responsiveWidth(0.3),
              marginTop: responsiveHeight(1),
              height: responsiveHeight(6),
              backgroundColor: '#fff',
              width: responsiveWidth(25),
            }}
            multiline={true}
            inputstyle={{
              height: responsiveHeight(6),
              fontSize: responsiveFontSize(1.4),
            }}
            placeholder={'Age'}
            textbgcolor={'#000'}
          />
          <Fields
            letterSpacing={0.5}
            error={errors}
            errorcolor={'red'}
            alignSelf={true}
            control={control}
            name={'Weight'}
            style={{
              borderWidth: responsiveWidth(0.3),
              marginTop: responsiveHeight(1),
              height: responsiveHeight(6),
              backgroundColor: '#fff',
              width: responsiveWidth(25),
            }}
            multiline={true}
            inputstyle={{
              height: responsiveHeight(6),
              fontSize: responsiveFontSize(1.4),
            }}
            placeholder={'Weight'}
            textbgcolor={'#000'}
          />
          <Fields
            letterSpacing={0.5}
            error={errors}
            errorcolor={'red'}
            alignSelf={true}
            control={control}
            name={'Pet Name'}
            style={{
              borderWidth: responsiveWidth(0.3),
              marginTop: responsiveHeight(1),
              height: responsiveHeight(6),
              backgroundColor: '#fff',
              width: responsiveWidth(30),
            }}
            multiline={true}
            inputstyle={{
              height: responsiveHeight(6),
              fontSize: responsiveFontSize(1.4),
            }}
            placeholder={'Pet Name'}
            textbgcolor={'#000'}
          />
        </View>
        <View>
          <Fields
            letterSpacing={0.5}
            error={errors}
            errorcolor={'red'}
            alignSelf={true}
            control={control}
            name={'Tell us your concerns '}
            style={{
              borderWidth: responsiveWidth(0.3),
              marginTop: responsiveHeight(3),
              height: responsiveHeight(8),
              backgroundColor: '#fff',
            }}
            multiline={true}
            inputstyle={{
              height: responsiveHeight(8),
              fontSize: responsiveFontSize(1.4),
            }}
            placeholder={'Tell us your concerns '}
            textbgcolor={'#000'}
          />
        </View>
        <View>
          <Text
            style={[
              styles.title,
              {textAlign: 'center', marginTop: responsiveHeight(4)},
            ]}>
            Upload Pet’s Photo
          </Text>
          <TouchableOpacity onPress={handle}>
            {img == null ? (
              <>
                <Image
                  source={uplaod}
                  resizeMode="contain"
                  style={{
                    height: responsiveWidth(45),
                    alignSelf: 'center',
                  }}
                />
              </>
            ) : (
              <>
                <Image
                  source={{uri: img?.path}}
                  resizeMode="cover"
                  style={{
                    height: responsiveWidth(25),
                    width: responsiveWidth(25),
                    alignSelf: 'center',
                  }}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
        <CoustomButton
          bgcolor={colors.AppColor}
          self
          text={'Next'}
          // loading={isLoading}
          textcolor={'#fff'}
          width={responsiveWidth(90)}
          style={{
            borderRadius: responsiveWidth(10),
            marginTop: responsiveHeight(4),
            marginBottom: responsiveHeight(10),
          }}
          onPress={() => {
            navigation.navigate('Coustom3');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Coustom1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: responsiveFontSize(1.3),
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: responsiveFontSize(1.8),
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  level: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    borderWidth: 1,
    borderRadius: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
