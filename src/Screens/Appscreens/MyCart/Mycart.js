import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {images} from '../../../Utlies/Images';
import {colors} from '../../../Utlies/constant/Themes';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {setUpdateOrder} from '../../../Store/Slice';

const Mycart = ({navigation}) => {
  const {order} = useSelector(state => state.Slice);

  const [value, setValue] = React.useState([]);

  const dispatch = useDispatch();
  const orderupdate = (item, action) => {
    let totalquntity = item.Quantity;

    if (action === true) {
      totalquntity++;
    } else if (action === false) {
      totalquntity--;
    }

    const updated = order.map(i => {
      if (i.id == item.id) {
        return {
          ...i,
          Quantity: totalquntity,
          totalprice: i.price * totalquntity,
        };
      }
      return i;
    });
    dispatch(setUpdateOrder(updated));
  };
  let totalprice = 0;
  for (let i = 0; i < order.length; i++) {
    order[i].totalprice++;
    let element = order[i].totalprice;
    totalprice = totalprice + element;
  }
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header Heading={'My Cart'} color={'#fff'} backbtn={true} />
      <View
        style={{
          marginTop: responsiveHeight(2),
          backgroundColor: 'transparent',
        }}>
        <ScrollView
          style={{flexGrow: 1, marginBottom: responsiveHeight(9)}}
          showsVerticalScrollIndicator={true}>
          <FlatList
            data={order}
            scrollEnabled={false}
            style={styles.flatlist}
            renderItem={({item, index}) => {
              return (
                <View style={styles.data_container}>
                  <View style={styles.data_content}>
                    <View style={styles.fav_img}>
                      <Image
                        source={{uri: item?.image_url}}
                        resizeMode="contain"
                        style={{
                          height: responsiveHeight(10),
                          width: responsiveHeight(10),
                        }}
                      />
                    </View>

                    <View style={styles.right_content}>
                      <View>
                        <Text numberOfLines={1} style={styles.label}>
                          {item.name}
                        </Text>
                        <Text style={styles.disc}>
                          Vivamus urna turpis, tempus ut
                        </Text>
                      </View>
                      <View style={styles.rate_btn_contain}>
                        <Text style={styles.rate}>${item.totalprice}</Text>
                        <View style={styles.btn}>
                          <TouchableOpacity
                            onPress={() => {
                              orderupdate(item, false);
                            }}>
                            <Image
                              resizeMode="contain"
                              source={images.minus}
                              style={{
                                height: responsiveWidth(5),
                                width: responsiveWidth(5),
                              }}
                            />
                          </TouchableOpacity>
                          <View>
                            <Text style={styles.btn_txt}>{item.Quantity}</Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              orderupdate(item, true);
                            }}>
                            <Image
                              resizeMode="contain"
                              source={images.pluscart}
                              style={{
                                height: responsiveWidth(5),
                                width: responsiveWidth(5),
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <View style={styles.bill}>
            <View style={styles.bill_contain}>
              <Text style={styles.bill_txt}>Amount of Products:</Text>
              <Text style={[styles.bill_txt, {color: 'gray'}]}>
                $ {totalprice}
              </Text>
            </View>
            <View style={styles.bill_contain}>
              <Text style={styles.bill_txt}>Tax:</Text>
              <Text style={[styles.bill_txt, {color: 'gray'}]}>.00</Text>
            </View>
            <View style={styles.bill_contain}>
              <Text style={styles.bill_txt}>Cargo:</Text>
              <Text style={[styles.bill_txt, {color: 'gray'}]}>Free</Text>
            </View>
            <View style={styles.bill_contain}>
              <Text style={styles.bill_txt}>TOTAL:</Text>
              <Text style={[styles.bill_txt, {color: 'gray'}]}>
                ${totalprice}
              </Text>
            </View>
            <View>
              <CoustomButton
                bgcolor={colors.AppColor}
                fontFamily={'Poppins-Bold'}
                text={'Continue to Checkout'}
                onPress={() => {
                  navigation.navigate('Checkout', {total: totalprice});
                }}
                textcolor={'#ffff'}
                style={{
                  height: responsiveHeight(6.5),
                  marginTop: responsiveHeight(1),
                  // marginBottom: responsiveHeight(40),
                }}
              />
            </View>
          </View>
          <View style={{height: responsiveHeight(10)}}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Mycart;

const styles = StyleSheet.create({
  data_container: {flex: 1, justifyContent: 'center'},
  data_content: {
    height: responsiveHeight(14),
    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(5),
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(5),
    overflow: 'hidden',
  },
  fav_img: {
    width: responsiveWidth(22),
    height: responsiveHeight(12),
    borderWidth: responsiveWidth(0.2),
    borderColor: colors.AppColor,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
  },
  rate: {
    color: colors.AppColor,
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.2,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: responsiveFontSize(2),
    letterSpacing: 0.5,
    fontWeight: '500',
    width: responsiveWidth(48),
  },
  flatlist: {overflow: 'hidden', top: responsiveHeight(1), zIndex: 999},
  right_content: {
    gap: responsiveHeight(1),
    height: responsiveHeight(12),
  },
  disc: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.3),
    color: 'gray',
  },
  btn: {
    height: responsiveHeight(5),
    width: responsiveWidth(30),
    borderRadius: responsiveWidth(1),

    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rate_btn_contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: responsiveWidth(12),
  },
  btn_txt: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    top: 2,
  },
  bill_contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bill_txt: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  bill: {
    height: responsiveHeight(30),
    marginHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    gap: responsiveHeight(1),
  },
});
