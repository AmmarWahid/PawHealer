import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../Utlies/constant/Themes';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomHeader from '../Common/Header/Header';
import {images} from '../Utlies/Images';

const Header = ({Heading, color, navigation}) => {
  return (
    <View>
      <View
        style={{
          // flex: 1,
          backgroundColor: colors.AppColor,
          borderBottomLeftRadius: responsiveWidth(12),
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 999,
          height: responsiveHeight(16),
        }}>
        <CoustomHeader
          Heading={Heading}
          color={color}
          lefticon={images.backarrow}
          textStyle={{top: responsiveHeight(3)}}
          leftTouch={navigation}
          fontFamily={'Poppins-Regular'}
        />
      </View>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({});
