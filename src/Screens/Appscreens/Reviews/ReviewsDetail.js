import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/Images';
import dummy from './../../../Assets/Dummy.jpg';
import StarRating from 'react-native-star-rating-widget';
import Dog from './../../../Assets/Dog.jpg';
import {colors} from '../../../Utlies/constant/Themes';
const ReviewsDetail = () => {
  const placeholderData = Array(5).fill({});
  const initialRatings = Array(placeholderData.length).fill(0);
  const [rating, setRating] = useState(initialRatings);
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header Heading={'Reviews'} color={'#fff'} />
      <View
        style={{
          flex: 1,
          // overflow: 'hidden',
          // marginTop: responsiveHeight(4),
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          style={{
            backgroundColor: '#fff',
            height: '100%',
            marginHorizontal: responsiveWidth(3),
            borderRadius: responsiveWidth(4),
            elevation: 10,
            marginVertical: responsiveHeight(5),
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: responsiveHeight(6.7),
              backgroundColor: 'rgba(224, 237, 222, 0.8)',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: responsiveWidth(5),
              borderTopLeftRadius: responsiveWidth(4),
              borderTopRightRadius: responsiveWidth(4),
              // borderRadius:responsiveWidth()
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
          <View style={{alignSelf: 'center', marginTop: responsiveHeight(1.3)}}>
            <StarRating
              rating={rating}
              onChange={value => setRating(value)}
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
              My rescued dog Lola has allergy and I give her some medicine and
              herbal supplements. Besides that, she probably has some episodes
              of collapsing tracheacauses coughing. My rescued dog Lola has
              allergy and I give her some medicine and herbal supplements.
              Besides that, she probably has some episodes of collapsing
              tracheacauses coughing.My rescued dog Lola has allergy and I give
              her some medicine and herbal supplements. Besides that, she
              probably has some episodes of collapsing tracheacauses coughing.My
              rescued dog Lola has allergy and I give her some medicine and
              herbal supplements. Besides that, she probably has some episodes
              of collapsing tracheacauses coughing.My rescued dog Lola has
              allergy and I give her some medicine and herbal supplements.
              Besides that, she probably has some episodes of collapsing
              tracheacauses coughing.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: responsiveWidth(4),
              paddingBottom: responsiveHeight(2),
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ReviewsDetail;

const styles = StyleSheet.create({
  txt: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
  },
});
