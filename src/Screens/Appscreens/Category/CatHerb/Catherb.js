import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../../Components/Header';
import {images} from '../../../../Utlies/Images';
import {colors} from '../../../../Utlies/constant/Themes';
import {useAddfavMutation, useGetAllfavQuery} from '../../../../Store/Main';

const Catherb = ({navigation, route}) => {
  const {item, name} = route.params || {};
  console.log('item', item);
  const [Addfavrts, {status}] = useAddfavMutation();
  const [loader, setLoader] = useState();
  const {data} = useGetAllfavQuery();
  // console.log('iserror', status);
  const handle = async item => {
    setLoader(item?.id);
    const res = await Addfavrts({product_id: item.id});
    if (res?.data?.success == true) {
      setLoader();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <Header
          Heading={name}
          color={'#fff'}
          navigation={() => navigation.navigate('HomeScreen')}
        />

        <FlatList
          numColumns={2}
          data={item}
          style={{}}
          contentContainerStyle={styles.bladder}
          renderItem={({item, index}) => {
            let fav = data?.data?.data.find(i => i?.product_id === item.id);

            // console.log('fav', fav);
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginTop: responsiveHeight(2),
                  marginBottom: responsiveHeight(4),
                }}>
                <View style={styles.containerItem}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{uri: item?.image_url}}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </View>
                  <Text numberOfLines={2} style={styles.itemName}>
                    {item?.name}
                  </Text>
                  <View style={styles.priceIcon}>
                    <Text style={styles.price}>$ {item?.price}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        handle(item);
                      }}>
                      {loader == item.id ? (
                        <ActivityIndicator size={'small'} color={'green'} />
                      ) : (
                        <Image
                          resizeMode="contain"
                          source={images.heart}
                          style={[
                            styles.heartIcon,
                            {tintColor: fav ? null : 'gray'},
                          ]}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.plus}
                    onPress={() => {
                      navigation.navigate('Productdetail', {
                        productItem: item,
                      });
                    }}>
                    <Image
                      resizeMode="contain"
                      source={images.plus}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Catherb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
  },
  label: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  viewMore: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    color: colors.AppColor,
  },
  bladder: {
    // flexDirection: 'row',
    // gap: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(3),
    // paddingBottom: responsiveHeight(3),

    // justifyContent: 'space-between',
    // width: responsiveWidth(100),
  },
  containerItem: {
    width: responsiveWidth(45),
    height: Dimensions.get('window').height / 3.4,
    borderRadius: responsiveWidth(2),
    backgroundColor: '#ffff',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    padding: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(3),
  },
  imageContainer: {
    alignItems: 'center',
    height: responsiveHeight(15),
    width: '100%',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.2),
    borderColor: colors.AppColor,
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(1.5),
  },
  image: {
    height: responsiveHeight(9),
    width: responsiveWidth(19),
  },
  itemName: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontWeight: '500',
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
    width: responsiveWidth(35),
    height: responsiveHeight(4.5),
  },
  priceIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  heartIcon: {
    width: responsiveWidth(5),
  },
  plus: {
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveHeight(26),
  },
  icon: {
    height: responsiveHeight(6),
  },
});
