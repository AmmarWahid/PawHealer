import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const DiscriptionText = ({
  children,
  textStyle,
  color,
  center,
  bold,
  marginHorizontal,
  fontFamily,
  ...rest
}) => {
  return (
    <View style={{height: responsiveWidth(4)}}>
      <Text
        style={[
          styles.Discription,
          color && {color: color},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold'},
          fontFamily && {fontFamily: fontFamily},
          textStyle,
          marginHorizontal && {marginHorizontal: responsiveWidth(3)},
        ]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};

export const NormalText = ({
  children,
  textStyle,
  color,
  center,
  bold,
  fontFamily,
  ...rest
}) => {
  return (
    <View>
      <Text
        style={[
          styles.normal,
          color && {color: color},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold'},
          fontFamily && {fontFamily: fontFamily},
          textStyle,
        ]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};
export const MediumText = ({
  children,
  textStyle,
  color,
  center,
  bold,
  fontFamily,
  ...rest
}) => {
  return (
    <View>
      <Text
        style={[
          styles.Medium,
          color && {color: color},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold'},
          fontFamily && {fontFamily: fontFamily},
          textStyle,
        ]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};
export const LargeText = ({
  children,
  textStyle,
  color,
  center,
  bold,
  fontFamily,
  ...rest
}) => {
  return (
    <View>
      <Text
        style={[
          styles.large,
          color && {color: color},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold'},
          fontFamily && {fontFamily: fontFamily},
          textStyle,
        ]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};
export const XLargeText = ({
  children,
  textStyle,
  color,
  center,
  bold,
  fontFamily,
  ...rest
}) => {
  return (
    <View>
      <Text
        style={[
          styles.Xlarge,
          color && {color: color},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold'},
          fontFamily && {fontFamily: fontFamily},
          textStyle,
        ]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};
export const XXLargeText = ({
  children,
  textStyle,
  color,
  center,
  bold,
  fontFamily,
  ...rest
}) => {
  return (
    <View>
      <Text
        style={[
          styles.XXlarge,
          color && {color: color},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold'},
          fontFamily && {fontFamily: fontFamily},
          textStyle,
        ]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  normal: {
    fontSize: responsiveFontSize(1.9),
  },
  Discription: {
    fontSize: responsiveFontSize(1.7),
  },
  Medium: {
    fontSize: responsiveFontSize(2.2),
  },
  large: {
    fontSize: responsiveFontSize(2.6),
  },
  Xlarge: {
    fontSize: responsiveFontSize(3),
  },
  XXlarge: {
    fontSize: responsiveFontSize(4),
    fontStyle: 'italic',
  },
});
