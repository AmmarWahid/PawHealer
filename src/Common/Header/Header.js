import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {LargeText, NormalText} from '../Coustomtext/Index';

const CoustomHeader = ({
  lefticon,
  righticon,
  Heading,
  headingcolor,
  color,
  fontFamily,

  textStyle,
  rightpress,
  leftTouch,
  rightstyle,

  ...rest
}) => {
  return (
    <View>
      <View style={{}}>
        {lefticon && (
          <TouchableOpacity onPress={leftTouch} style={styles.iconscontain}>
            <Image
              resizeMode="contain"
              source={lefticon}
              style={styles.icons}
            />
          </TouchableOpacity>
        )}

        <View>
          {Heading && (
            <LargeText
              bold
              color={color}
              fontFamily={fontFamily}
              children={Heading}
              textStyle={[
                {
                  marginHorizontal: responsiveWidth(20),
                },
                textStyle,
              ]}
              center
            />
          )}
        </View>
        {righticon && (
          <TouchableOpacity
            onPress={rightpress}
            style={{position: 'absolute', right: responsiveWidth(6)}}>
            <Image
              resizeMode="contain"
              source={righticon}
              style={styles.icons}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CoustomHeader;

const styles = StyleSheet.create({
  icons: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  iconscontain: {
    position: 'absolute',
    left: responsiveWidth(6),
    zIndex: 9999,
  },
});
