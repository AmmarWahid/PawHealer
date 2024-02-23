import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Dotcheck = ({setvalue, value}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setvalue(value);
        }}
        style={{
          height: responsiveWidth(5),
          width: responsiveWidth(5),
          backgroundColor: '#ffff',
          borderRadius: responsiveWidth(5),
          borderWidth: responsiveWidth(0.2),
          borderColor: 'rgba(185, 185, 185, 1)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {value == true ? (
          <View
            style={{
              height: responsiveWidth(2.6),
              width: responsiveWidth(2.6),
              backgroundColor: 'green',
              borderRadius: responsiveWidth(2.6),
            }}></View>
        ) : null}
      </TouchableOpacity>
    </>
  );
};

export default Dotcheck;

const styles = StyleSheet.create({});
