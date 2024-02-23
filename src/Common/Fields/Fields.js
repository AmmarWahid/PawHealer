import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import CoustomTextinput from '../Textinput/Textinput';
import CoustomButton from '../CoustomButton.js/CoustomButton';
import Coustomdate from '../CoustomDateinput.js/Coustomdate';
import CoustomdropDown from '../CoustomdropDown/CoustomdropDown';
import COTP from '../CoustomOTP/CoustomOTP';
const Fields = ({
  name,
  control,
  rules,
  error,
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
  style,
  alignSelf,
  type,
  bordercolor,
  item,
  defaultValue,
  maxLength,
  index,
  contanierstyle,
  Placecolor,
  textbgcolor,
  multiline,
  placeblack,
  onFocus,
  letterSpacing,
  onIconpress,
  inputstyle,
  textAlignVertical,
}) => {
  const Data = `otp[${index}]`;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({field: {onChange, onBlur, value}}) => {
        if (type == 'date') {
          return (
            <Coustomdate
              Error={error && error[name]?.message}
              onChange={value => onChange(value)}
              value={value}
              bordercolor={bordercolor}
              color={labelColor}
              errorcolor={errorcolor}
              widht={inputWidht}
              errorstyle={errorstyle}
              textStyle={labelStyle}
              style={style}
            />
          );
        }
        // if (type == 'otp') {
        //   return <COTP onChange={onChange} value={value} ind={index} />;
        // }
        if (type == 'DateFormate') {
          const handleDateChange = input => {
            // Remove any non-numeric characters
            const cleanedInput = input.replace(/\D/g, '');
            // Use regular expressions to add slashes for date formatting
            if (cleanedInput.length <= 2) {
              // Format: DD
              return cleanedInput;
            } else if (cleanedInput.length <= 4) {
              // Format: DD/MM
              return `${cleanedInput.slice(0, 2)}/${cleanedInput.slice(2)}`;
            } else {
              // Format: DD/MM/YYYY
              return `${cleanedInput.slice(0, 2)}/${cleanedInput.slice(
                2,
                4,
              )}/${cleanedInput.slice(4, 8)}`;
            }
          };

          return (
            <CoustomTextinput
              onFocus={onFocus}
              textbgcolor={textbgcolor}
              Error={error && error[name]?.message}
              errorcolor={errorcolor}
              errorstyle={errorstyle}
              fontFamily={fontFamily}
              inputIcon={inputIcon}
              inputWidht={inputWidht}
              Placecolor={Placecolor}
              keyboardnumber={keyboardnumber}
              label={label}
              labelColor={labelColor}
              labelStyle={labelStyle}
              passwordEye={passwordEye}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              onchangetext={text => {
                const formatedvalue = handleDateChange(text);
                onChange(formatedvalue);
              }}
              value={value}
              style={style}
              alignSelf={alignSelf}
              // maxLength={9}
            />
          );
        }
        if (type == 'Dropdown') {
          return (
            <CoustomdropDown
              Error={error && error[name]?.message}
              bordercolor={bordercolor}
              color={labelColor}
              inputwidht={inputWidht}
              label={label}
              errorcolor={errorcolor}
              errorstyle={errorstyle}
              onChange={value => onChange(value)}
              textStyle={labelStyle}
              value={value}
              item={item}
              placeholder={placeholder}
              style={style}
              widht={inputWidht}
            />
          );
        }
        console.log('first', passwordEye);
        return (
          <CoustomTextinput
            Error={error && error[name]?.message}
            errorcolor={errorcolor}
            errorstyle={errorstyle}
            fontFamily={fontFamily}
            inputIcon={inputIcon}
            inputWidht={inputWidht}
            keyboardnumber={keyboardnumber}
            label={label}
            labelColor={labelColor}
            labelStyle={labelStyle}
            passwordEye={passwordEye}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onchangetext={value => onChange(value)}
            value={value}
            style={style}
            alignSelf={alignSelf}
            maxLength={maxLength}
            contanierstyle={contanierstyle}
            Placecolor={Placecolor}
            textbgcolor={textbgcolor}
            multiline={multiline}
            placeblack={placeblack}
            onFocus={onFocus}
            letterSpacing={letterSpacing}
            onIconpress={onIconpress}
            inputstyle={inputstyle}
            textAlignVertical={textAlignVertical}
          />
        );
      }}
    />
  );
};

export default Fields;

const styles = StyleSheet.create({});
