import {StyleSheet, Text, View, FlatList, StatusBar, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header from '../../../Components/Header';
import {images} from '../../../Utlies/Images';
import dummy from './../../../Assets/Dummy.jpg';
import StarRating from 'react-native-star-rating-widget';
import Dog from './../../../Assets/Dog.jpg';
import {colors} from '../../../Utlies/constant/Themes';

const Review = ({navigation}) => {
  const placeholderData = Array(5).fill({});

  const initialRatings = Array(placeholderData.length).fill(0);

  const [rating, setRating] = useState(initialRatings);
  const handleChange = useCallback(
    (value, index) => {
      const updatedRatings = [...rating];
      updatedRatings[index] =
        Math.round((updatedRatings[index] + value) * 5) / 10;
      setRating(updatedRatings);
    },
    [rating],
  );
  console.log(rating);
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header Heading={'Reviews'} color={'#fff'} />

      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          contentContainerStyle={{
            paddingVertical: responsiveHeight(6),
            paddingBottom: responsiveHeight(18),
          }}
          style={{}}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1}}>
                <View style={styles.content_container}>
                  <View
                    style={{
                      height: responsiveHeight(6.6),
                      borderTopRightRadius: responsiveWidth(5),
                      backgroundColor: 'rgba(224, 237, 222, 0.8)',
                      borderTopLeftRadius: responsiveWidth(5),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: responsiveWidth(5),
                      overflow: 'hidden',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: responsiveWidth(3),
                      }}>
                      <Image
                        source={dummy}
                        resizeMode="contain"
                        style={{
                          height: responsiveWidth(10),
                          width: responsiveWidth(10),
                          borderRadius: responsiveWidth(5),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: responsiveFontSize(1.9),
                          fontFamily: 'Poppins-Regular',
                          color: '#000',
                        }}>
                        Christa Gleadhill, CO
                      </Text>
                    </View>
                    <Image
                      source={images.ThreeDot}
                      resizeMode="contain"
                      style={{
                        width: responsiveWidth(5),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: responsiveHeight(1),
                    }}>
                    <StarRating
                      rating={rating[index]}
                      onChange={value => handleChange(value, index)}
                      // activeColor=""
                      activeSize={20}
                      // inactiveColor="#fff"
                      inactiveSize={20}
                      spacing={2}
                      fillAnimation={false}
                      enableSwiping={false}
                      starStyle={{marginHorizontal: -1, opacity: 0.9}}
                      color="orange"
                      animationConfig={{
                        delay: 100,
                        duration: 100,
                        scale: 1,
                      }}
                      enableHalfStar={false}
                    />
                  </View>
                  <View>
                    <Text style={styles.txt}>
                      My rescued dog Lola has allergy and I give her some
                      medicine and herbal supplements. Besides that, she
                      probably has some episodes of collapsing tracheacauses
                      coughing.{''}
                      <Text style={{color: 'gray', fontWeight: '900'}}>
                        Readmore
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: responsiveWidth(4),
                    }}>
                    <View style={{}}>
                      <Image
                        source={Dog}
                        // resizeMode="contain"
                        style={{
                          width: responsiveWidth(32),
                          height: responsiveHeight(12),
                          borderRadius: responsiveWidth(5),
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: responsiveWidth(32),
                        height: responsiveHeight(12),
                        borderWidth: responsiveWidth(0.2),
                        borderColor: colors.AppColor,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: responsiveWidth(5),
                      }}>
                      <Image
                        source={images.mask}
                        resizeMode="contain"
                        style={{
                          width: responsiveWidth(10),
                          height: responsiveHeight(10),
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Review;

const styles = StyleSheet.create({
  content_container: {
    height: responsiveHeight(40),
    backgroundColor: '#fff',
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(1),
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
    elevation: 40,
    overflow: 'hidden',
  },
  txt: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
  },
});
