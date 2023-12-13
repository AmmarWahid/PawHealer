import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../Utlies/constant/Themes';

const Processing = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: responsiveHeight(2)}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <View style={styles.container}>
                  <View style={styles.contents}>
                    <Text style={styles.boldtxt}>Order №1947034</Text>
                    <Text style={styles.lighttxt}>05-12-2019</Text>
                  </View>
                  <View
                    style={[
                      styles.contents,
                      {justifyContent: 'flex-start', gap: 10},
                    ]}>
                    <Text style={[styles.lighttxt, {color: 'gray'}]}>
                      Tracking number:
                    </Text>

                    <Text style={[styles.lighttxt, {color: '#000'}]}>
                      IW3475453455
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.contents,
                      //   {justifyContent: 'flex-start', gap: 10},
                    ]}>
                    <Text style={[styles.lighttxt, {color: 'gray'}]}>
                      Quantity: <Text style={{color: '#000'}}> 3</Text>
                    </Text>

                    <Text style={[styles.lighttxt, {color: 'gray'}]}>
                      Total Amount: <Text style={{color: '#000'}}> $119</Text>
                    </Text>
                  </View>
                  <View style={styles.contents}>
                    <View style={styles.detail}>
                      <Text style={[styles.lighttxt, {color: '#000', top: 2}]}>
                        Details
                      </Text>
                    </View>
                    <Text style={[styles.lighttxt, {color: 'orange'}]}>
                      Processing
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default React.memo(Processing);

const styles = StyleSheet.create({
  container: {
    height: '96%',
    width: responsiveWidth(90),
    backgroundColor: '#ffff',
    elevation: 2,
    marginVertical: responsiveHeight(1.5),
    alignSelf: 'center',
    borderRadius: responsiveWidth(3),
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(1.5),
  },
  boldtxt: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(1.7),
  },
  lighttxt: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.45),
  },
  detail: {
    height: responsiveHeight(5),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.1),
  },
});
