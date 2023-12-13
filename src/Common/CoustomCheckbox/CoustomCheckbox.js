import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { CheckBox as ThemeCheckbox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  LargeText,
  MediumText,
  NormalText,
  XLargeText,
} from '../Coustomtext/Index';
const CoustomCheckbox = ({
  Ltext,
  text,
  bold,
  textStyle,
  color,
  fontFamily,
  Mtext,
  value,
  onChange,
  scaleX,
  scaleY,
  height,
  width,
}) => {
  const tintColors = {
    true: '#fff',
    false: '#fff',
  };
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <>
      <View
        style={{
          height: responsiveHeight(10),
          flexDirection: 'row',
          alignItems: 'center',
          gap: responsiveWidth(2),
          left: responsiveWidth(3),
        }}>
          {Platform.OS ==='android'?  <View
          style={{
            backgroundColor: !value ? '#FFF' : 'green',
            borderRadius: responsiveWidth(1),
            height: height,
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
          <CheckBox
            style={{
              transform: [{scaleX: scaleX}, {scaleY: scaleY}],
              color: '#fff',
            }}
            tintColors={tintColors}
            disabled={false}
            value={value}
            onFillColor="#fff"
            onValueChange={newValue => onChange(newValue)}
          />

        </View>:
         <View
         style={{
           backgroundColor: '#FFF' ,
           borderRadius: responsiveWidth(1),
          //  height: height,
          //  width: width,
           alignItems: 'center',
           justifyContent: 'center',
         }}>
          <CheckBox
          checked={value}
        onValueChange={newValue => onChange(newValue)}
        boxType='square'
        tintColor='#fff'
        hideBox
       onTintColor='#ffff' 
      
       style={{
        // transform: [{scaleX: scaleX}, {scaleY: scaleY}],
        // color: '#fff',
        // backgroundColor:'#ffff',
        height:height,width:width,
        // borderRadius: 100,
      }}
       onCheckColor='green'
       
        // onFillColor='#ffff'
          // onPress={toggleCheckbox}
          // // Use ThemeProvider to make change for all checkbox
          // iconType="material-community"
          // checkedIcon="checkbox-marked"
          // uncheckedIcon="checkbox-blank-outline"
          // checkedColor="red"
        />
</View>

}
              {Ltext && (
          <XLargeText
            children={text}
            bold={bold}
            textStyle={textStyle}
            color={color}
            fontFamily={fontFamily}
          />
        )}
        {Mtext && (
          <NormalText
            children={text}
            bold={bold}
            textStyle={textStyle}
            color={color}
            fontFamily={fontFamily}
          />
        )}
      </View>
    </>
  );
};

export default CoustomCheckbox;

const styles = StyleSheet.create({});
