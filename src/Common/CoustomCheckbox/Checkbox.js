import {
  Image,
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
import tick from '../../Assets/tick.png';
import untick from '../../Assets/unchecked.png';

const Boxcheck = ({setvalue, value}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setvalue(value);
        }}
        style={
          {
            //   height: responsiveWidth(5),
            //   width: responsiveWidth(5),
            //   backgroundColor: '#ffff',
            //   borderRadius: responsiveWidth(1),
            //   borderWidth: responsiveWidth(0.2),
            //   borderColor: 'gray',
            //   alignItems: 'center',
            //   justifyContent: 'center',
          }
        }>
        <Image
          resizeMode="contain"
          source={value == true ? tick : untick}
          style={{height: responsiveWidth(7), width: responsiveWidth(7)}}
        />
      </TouchableOpacity>
    </>
  );
};

export default React.memo(Boxcheck);

const styles = StyleSheet.create({});
