import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
// import OTPInput from 'react-native-otp';
import {useForm, Controller} from 'react-hook-form';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const COTP = ({control}) => {
  const textInputRefs = useRef([]);

  const focusNextInput = index => {
    if (index < 3) {
      textInputRefs.current[index + 1]?.focus();
    }
  };
  const {
    formState: {errors},
  } = useForm();
  return (
    <View style={[styles.container]}>
      {[0, 1, 2, 3].map(index => (
        <Controller
          key={index}
          control={control}
          name={`otp[${index}]`}
          defaultValue=""
          rules={{required: true, pattern: /^[0-9]*$/}}
          render={({field}) => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={value => {
                field.onChange(value);
                if (value.length === 1) {
                  focusNextInput(index);
                }
              }}
              value={field.value}
              maxLength={1}
              ref={ref => (textInputRefs.current[index] = ref)}
            />
          )}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    width: responsiveWidth(8),
    height: 50,
    borderBottomWidth: responsiveWidth(1),
    textAlign: 'center',
    borderBottomColor: '#000',
    fontSize: 18,
    color: '#000',
  },
});

export default COTP;
