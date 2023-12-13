import {StyleSheet, Text, View,Platform} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import CoustomCheckbox from './CoustomCheckbox';
const FieldsControler = ({
  name,
  control,
  rules,
  Ltext,
  text,
  bold,
  textStyle,
  color,
  fontFamily,
  Mtext,
  scaleX,
  scaleY,
  width,
  height,
}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onBlur, value, onChange}}) => {
          return (
          
            <CoustomCheckbox
              Ltext={Ltext}
              Mtext={Mtext}
              bold={bold}
              color={color}
              fontFamily={fontFamily}
              onChange={onChange}
              text={text}
              textStyle={textStyle}
              value={value}
              scaleX={scaleX}
              scaleY={scaleY}
              height={height}
              width={width}
            />
          );
        }}
      />
    </View>
  );
};

export default FieldsControler;

const styles = StyleSheet.create({});
