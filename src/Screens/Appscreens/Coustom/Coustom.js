import React, {useCallback, useState} from 'react';
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

const Coustom = ({navigation, route}) => {
  const {image, style, styletxt} = route.params || {};
  const [value, setvalue] = useState();
  const [values, setvalues] = useState({});
  const [itemValues, setItemValues] = useState({});
  const check = useCallback(i => {
    setItemValues(prev => ({
      ...prev,
      [i.name]: !prev[i.name],
    }));
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
      <View
        style={{
          marginHorizontal: responsiveWidth(5),
          marginBottom: responsiveHeight(10),
        }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          ListFooterComponent={() => {
            return (
              <View>
                <View>
                  <Fields
                    letterSpacing={0.5}
                    error={errors}
                    errorcolor={'red'}
                    label={'Your Comments?'}
                    labelStyle={[
                      styles.title,
                      {
                        marginTop: responsiveHeight(1.5),
                        fontSize: responsiveFontSize(1.5),
                      },
                    ]}
                    alignSelf={true}
                    control={control}
                    name={'Chief complaint?'}
                    style={{
                      borderWidth: responsiveWidth(0.3),
                      marginTop: responsiveHeight(1),
                      height: responsiveHeight(8),
                      backgroundColor: '#fff',
                    }}
                    multiline={true}
                    inputstyle={{
                      height: responsiveHeight(8),
                      fontSize: responsiveFontSize(1.4),
                    }}
                    placeholder={'Chief complaint?'}
                    textbgcolor={'#000'}
                  />
                </View>
                <View>
                  <Fields
                    letterSpacing={0.5}
                    error={errors}
                    errorcolor={'red'}
                    label={'How long has it been going on?'}
                    labelStyle={[
                      styles.title,
                      {
                        marginTop: responsiveHeight(1.5),
                        fontSize: responsiveFontSize(1.5),
                      },
                    ]}
                    alignSelf={true}
                    control={control}
                    name={'How long has it been going on?'}
                    style={{
                      borderWidth: responsiveWidth(0.3),
                      marginTop: responsiveHeight(1),
                      height: responsiveHeight(8),
                      backgroundColor: '#fff',
                    }}
                    multiline={true}
                    inputstyle={{
                      height: responsiveHeight(8),
                      fontSize: responsiveFontSize(1.4),
                    }}
                    placeholder={'How long has it been going on?'}
                    textbgcolor={'#000'}
                  />
                </View>
                <View>
                  <Fields
                    letterSpacing={0.5}
                    error={errors}
                    errorcolor={'red'}
                    label={'Currant mads and supplements:'}
                    labelStyle={[
                      styles.title,
                      {
                        marginTop: responsiveHeight(1.5),
                        fontSize: responsiveFontSize(1.5),
                      },
                    ]}
                    alignSelf={true}
                    control={control}
                    name={'Currant mads and supplements:'}
                    style={{
                      borderWidth: responsiveWidth(0.3),
                      marginTop: responsiveHeight(1),
                      height: responsiveHeight(8),
                      backgroundColor: '#fff',
                    }}
                    multiline={true}
                    inputstyle={{
                      height: responsiveHeight(8),
                      fontSize: responsiveFontSize(1.4),
                    }}
                    placeholder={'Currant mads and supplements:'}
                    textbgcolor={'#000'}
                  />
                </View>
                <View>
                  <Fields
                    letterSpacing={0.5}
                    error={errors}
                    errorcolor={'red'}
                    label={
                      'Are the current meds or supplements helping your dog?'
                    }
                    labelStyle={[
                      styles.title,
                      {
                        marginTop: responsiveHeight(1.5),
                        fontSize: responsiveFontSize(1.5),
                      },
                    ]}
                    alignSelf={true}
                    control={control}
                    name={
                      'Are the current meds or supplements helping your dog?'
                    }
                    style={{
                      borderWidth: responsiveWidth(0.3),
                      marginTop: responsiveHeight(1),
                      height: responsiveHeight(8),
                      backgroundColor: '#fff',
                    }}
                    multiline={true}
                    inputstyle={{
                      height: responsiveHeight(8),
                      fontSize: responsiveFontSize(1.4),
                    }}
                    placeholder={
                      'Are the current meds or supplements helping your dog?'
                    }
                    textbgcolor={'#000'}
                  />
                </View>
                <View>
                  <Fields
                    letterSpacing={0.5}
                    error={errors}
                    errorcolor={'red'}
                    label={
                      'Does your pet have diseases of the organs we should know about?'
                    }
                    labelStyle={[
                      styles.title,
                      {
                        marginTop: responsiveHeight(1.5),
                        fontSize: responsiveFontSize(1.5),
                      },
                    ]}
                    alignSelf={true}
                    control={control}
                    name={
                      'Does your pet have diseases of the organs we should know about?'
                    }
                    style={{
                      borderWidth: responsiveWidth(0.3),
                      marginTop: responsiveHeight(1),
                      height: responsiveHeight(8),
                      backgroundColor: '#fff',
                    }}
                    multiline={true}
                    inputstyle={{
                      height: responsiveHeight(8),
                      fontSize: responsiveFontSize(1.4),
                    }}
                    placeholder={
                      'Does your pet have diseases of the organs we should know about?'
                    }
                    textbgcolor={'#000'}
                  />
                </View>
                <View>
                  <Fields
                    letterSpacing={0.5}
                    error={errors}
                    errorcolor={'red'}
                    label={'Your Comments?'}
                    labelStyle={[
                      styles.title,
                      {
                        marginTop: responsiveHeight(1.5),
                        fontSize: responsiveFontSize(1.5),
                      },
                    ]}
                    alignSelf={true}
                    control={control}
                    name={'Your Comments?'}
                    style={{
                      borderWidth: responsiveWidth(0.3),
                      marginTop: responsiveHeight(1),
                      height: responsiveHeight(16),
                      backgroundColor: '#fff',
                    }}
                    multiline={true}
                    inputstyle={{
                      height: responsiveHeight(16),
                      fontSize: responsiveFontSize(1.4),
                      textAlignVertical: 'top',
                    }}
                    placeholder={'Your Comments?'}
                    textbgcolor={'#000'}
                  />
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
                    navigation.navigate('Coustom1');
                  }}
                />
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View style={{}}>
                <View>
                  <Image resizeMode="cover" style={style} source={image} />
                </View>
                <View>
                  <Text style={styles.txt}>
                    {`\nHere's how it works:\n\n1: Answer the questions related to your pet based on herbal identification patterns.\n\nYou then buy a "Custom Blended Formula".\n\n3: A classical herbal formula is assigned and modified to balance Yin-Yang, Qi-Blood. The fundamentals of all living beings.\n\nIt's all about balancing Yin and Yang, Qi and Blood, it's as simple as that. Yin is substance with form, Yang is function and is formless, Qi is breaths, and Blood is a form of Yin.\n\n\n`}
                  </Text>
                  <Text
                    style={[
                      styles.txt,
                      {
                        fontSize: responsiveFontSize(2),
                        fontFamily: 'Poppins-Bold',
                      },
                    ]}>
                    {'Start Custom Blending NOW!\n'}
                  </Text>
                </View>
              </View>
            );
          }}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1}}>
                <View
                  style={{
                    paddingBottom: responsiveHeight(1),
                    paddingTop: responsiveHeight(0.7),
                  }}>
                  <Text style={styles.title}>{item?.title}</Text>
                </View>
                <View
                  style={
                    index == 0
                      ? {
                          flexDirection: 'row',
                          gap: responsiveWidth(2),
                        }
                      : {
                          flexDirection: 'row',
                          gap: responsiveWidth(3),
                          flexWrap: 'wrap',
                        }
                  }>
                  {item?.product.map((i, ind) => {
                    return (
                      <View key={ind}>
                        <View
                          onTouchEnd={() => {
                            index == 0 && setvalue(i.name);
                          }}
                          style={
                            index == 0
                              ? [
                                  styles.level,
                                  {
                                    backgroundColor:
                                      i.name == value ? 'green' : '#fff',
                                    alignItems: 'center',
                                  },
                                ]
                              : {flexDirection: 'row', alignItems: 'center'}
                          }>
                          {item?.check == false ? (
                            <View style={{paddingRight: responsiveWidth(0.5)}}>
                              <Dotcheck
                                setvalue={() =>
                                  setItemValues(prev => ({
                                    ...prev,
                                    [i.name]: !prev[i.name],
                                  }))
                                }
                                value={itemValues[i.name]}
                              />
                            </View>
                          ) : (
                            <>
                              {item?.check == true ? (
                                <Boxcheck
                                  setvalue={() => check(i)}
                                  value={itemValues[i.name]}
                                />
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                          <Text
                            style={
                              index == 0
                                ? [
                                    styles.txt,
                                    {
                                      color: i.name == value ? '#fff' : '#000',
                                    },
                                  ]
                                : [styles.txt, {top: responsiveHeight(0.1)}]
                            }>
                            {i.name}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Coustom;

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
