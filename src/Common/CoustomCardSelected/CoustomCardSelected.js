import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  DiscriptionText,
  LargeText,
  MediumText,
  XLargeText,
  XXLargeText,
} from '../Coustomtext/Index';
const CoustomCardSelected = ({
  setValue,
  value,
  card,
  width,
  isButton,
  icon,
  btnIcon,
  children,
  textStyle,
  center,
  height,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        borderWidth: responsiveWidth(0.2),
        alignSelf: center,
        marginTop: responsiveHeight(2),
        backgroundColor: '#fff',
        elevation: 1,
      }}>
      <View>
        <Image
          resizeMode="contain"
          source={icon}
          style={{
            height: responsiveHeight(6),
            width: responsiveHeight(7),
            position: 'absolute',
            left: responsiveWidth(1),
          }}
        />
        <DiscriptionText
          children={children}
          color={'grey'}
          bold
          textStyle={[
            {
              fontSize: responsiveFontSize(1.2),
              position: 'absolute',
              top: responsiveHeight(5),
              left: responsiveWidth(1),
            },
            textStyle,
          ]}
        />
      </View>
      <View>
        {isButton && (
          <TouchableOpacity
            onPress={onPress}
            style={{
              height: responsiveHeight(2.5),
              width: responsiveWidth(5),
              borderRadius: responsiveWidth(2.5),
              borderWidth: responsiveWidth(0.1),
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: responsiveWidth(3),

              top: responsiveHeight(2.5),
            }}>
            <Image
              resizeMode="contain"
              source={btnIcon}
              style={{
                height: responsiveHeight(2.6),
                width: responsiveWidth(5.2),
                borderRadius: responsiveWidth(2.6),
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CoustomCardSelected;

const styles = StyleSheet.create({});
