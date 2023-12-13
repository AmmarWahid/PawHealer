import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {DiscriptionText, NormalText} from '../Coustomtext/Index';

const CoustomdropDown = ({
  onChange,
  value,
  bordercolor,
  color,
  textStyle,
  Error,
  errorcolor,
  label,
  errorstyle,
  inputwidht,
  top,
  item,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(item || []);
  return (
    <View style={{zIndex: 1000}}>
      {label && (
        <NormalText children={label} color={color} textStyle={textStyle} />
      )}

      <DropDownPicker
        open={open}
        value={value}
        items={item}
        setOpen={setOpen}
        setItems={setItems}
        autoScroll
        // dropDownDirection="TOP"

        containerStyle={{borderColor: '#F8F8F8'}}
        onSelectItem={item => onChange(item.value)}
        listItemContainerStyle={{
          height: responsiveHeight(5),
          borderColor: '#F8F8F8',
          width: responsiveWidth(50),
          backgroundColor: '#F8F8F8',
          zIndex: 999999999,
        }}
        dropDownContainerStyle={{width: responsiveWidth(30)}}
        stickyHeader={false}
        arrowIconContainerStyle={true}
        placeholder={placeholder}
        placeholderStyle={{color: 'grey'}}
        style={{
          width: inputwidht,
          backgroundColor: '#F8F8F8',
          marginTop: top,
          borderRadius: responsiveHeight(1),
          borderColor: '#F8F8F8',
          zIndex: 9999999999999,
          // height: responsiveHeight(3),
        }}
      />

      {Error && (
        <DiscriptionText
          children={Error}
          textStyle={errorstyle}
          color={errorcolor}
        />
      )}
    </View>
  );
};

export default CoustomdropDown;

const styles = StyleSheet.create({});
