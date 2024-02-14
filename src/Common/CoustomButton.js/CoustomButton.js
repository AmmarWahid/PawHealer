import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {MediumText, NormalText} from '../Coustomtext/Index';

const CoustomButton = ({
  textStyle,
  textcolor,
  fontFamily,
  height,
  width,
  bgcolor,
  borderwidth,
  borderColor,
  text,
  onPress,
  withicon,
  self,
  style,
  iconcolor,
  loading,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            height: responsiveHeight(5.7),
            width: width,
            backgroundColor: bgcolor,

            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: responsiveWidth(3),
            borderColor: borderColor,
            zIndex: -999999,
          },
          borderwidth && {borderWidth: responsiveWidth(0.2)},
          self && {alignSelf: 'center'},
          style,
        ]}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <>
            {withicon && (
              <Image
                resizeMode="contain"
                source={withicon}
                style={{
                  height: responsiveHeight(3.5),
                  width: responsiveHeight(4),
                  borderRadius: responsiveHeight(2),
                  position: 'absolute',
                  left: responsiveWidth(7),
                  tintColor: iconcolor,
                }}
              />
            )}

            <NormalText
              children={text}
              textStyle={[
                {left: withicon ? responsiveWidth(3) : null},
                textStyle,
              ]}
              bold
              color={textcolor}
              fontFamily={fontFamily}
            />
          </>
        )}
      </TouchableOpacity>
    </>
  );
};

export default CoustomButton;

const styles = StyleSheet.create({});
