import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  DiscriptionText,
  LargeText,
  MediumText,
  NormalText,
  XLargeText,
  XXLargeText,
} from './../../Common/Coustomtext/Index';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const CoustomTextinput = ({
  fontFamily,
  labelStyle,
  labelColor,
  labelbold,
  label,
  inputWidht,
  secureTextEntry,
  passwordEye,
  inputIcon,
  keyboardnumber,
  placeholder,
  errorcolor,
  errorstyle,
  Error,
  value,
  onchangetext,
  style,
  alignSelf,
  maxLength,
  contanierstyle,
  Placecolor,
  textbgcolor,
  multiline,
  placeblack,
  onFocus,
  tintColor,
  letterSpacing,
  onIconpress,
  numberOfLines,
  inputstyle,
  textAlignVertical,
}) => {
  const [hide, Sethide] = useState(true);

  console.log('hide', hide);
  return (
    <View style={contanierstyle}>
      {label && (
        <MediumText
          children={label}
          bold={labelbold}
          color={labelColor}
          fontFamily={fontFamily}
          textStyle={labelStyle}
        />
      )}

      <View
        style={[
          {
            height: responsiveHeight(5.5),
            backgroundColor: '#F8F8F8',
            borderRadius: responsiveWidth(2),
            width: inputWidht ? inputWidht : responsiveWidth(90),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          },
          alignSelf && {alignSelf: 'center'},
          style,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            left: responsiveWidth(2),
          }}>
          <TextInput
            onFocus={onFocus}
            showSoftInputOnFocus
            numberOfLines={numberOfLines}
            style={[
              {
                height: '100%',
                // left: responsiveWidth(1),
                width: responsiveWidth(78),

                color: 'black',

                opacity: 0.8,
                letterSpacing: letterSpacing,
                // textAlignVertical: 'top',
              },
              {color: textbgcolor},
              inputstyle,
            ]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && hide}
            keyboardType="default"
            value={value}
            onChangeText={onchangetext}
            placeholderTextColor={Placecolor ? '#fff' : '#000'}
            maxLength={maxLength}
            multiline={multiline}
            autoCapitalize="none"
          />

          {inputIcon && (
            <View onTouchEnd={onIconpress}>
              <Image
                resizeMode="contain"
                style={{
                  height: responsiveHeight(3),
                  width: responsiveHeight(3),
                  tintColor: tintColor,
                  // left: responsiveWidth(10),
                }}
                source={inputIcon}
              />
            </View>
          )}
        </View>
        {passwordEye == true && (
          <TouchableOpacity
            style={{right: responsiveWidth(12)}}
            onPress={() => {
              Sethide(!hide);
            }}>
            <Image
              resizeMode="contain"
              source={
                hide == false
                  ? require('../Assets/Hide.png')
                  : require('../Assets/View.png')
              }
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                // right: responsiveWidth(12),
                tintColor: 'grey',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {Error && (
        // <View style={{height: responsiveHeight(3)}}>
        <DiscriptionText
          children={Error}
          color={errorcolor}
          textStyle={errorstyle}
        />
        // </View>
      )}
    </View>
  );
};

export default CoustomTextinput;

const styles = StyleSheet.create({});
