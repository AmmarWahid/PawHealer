import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {DiscriptionText} from '../Coustomtext/Index';
import moment from 'moment';

const Coustomdate = ({
  onChange,
  value,
  bordercolor,
  widht,
  color,
  textStyle,
  Error,
  errorcolor,
  errorstyle,
  style,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = date => {
    onChange(moment(date).format('YYYY-MM-DD'));
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => showDatePicker()}
        style={[styles.container, style, {bordercolor, width: widht, style}]}>
        <DiscriptionText
          color={color}
          textStyle={textStyle}
          children={value ? value : 'Select Date'}></DiscriptionText>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          display="inline"
        />
        <Image
          resizeMode="contain"
          source={require('../Assets/calendar.png')}
          style={{
            height: responsiveHeight(3.5),
            width: responsiveHeight(3.5),
            tintColor: 'grey',
          }}
        />
      </TouchableOpacity>
      {Error && (
        <DiscriptionText
          children={Error}
          color={errorcolor}
          textStyle={errorstyle}
        />
      )}
    </View>
  );
};

export default Coustomdate;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(6.5),
    backgroundColor: '#F8F8F8',
    // borderWidth: responsiveWidth(0.1),

    borderRadius: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(3),
  },
});
