import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Return = ({navigation}) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 0.17}}>
        <View style={{height: '100%'}}>
          <Header
            Heading={'Returns'}
            color={'#fff'}
            navigation={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
      <View style={styles.content_container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View>
            <Text style={styles.txt}>
              **** Custom Formulas **** for your pet will not be allowed for
              return. Please understand that we make these just for your dog or
              cat and therefore cannot be used on any other pets.{'\n'}
              {'\n'}
              For Stock items we accept returns on unopened, sealed items in
              resalable condition within 60 days from date of delivery.{'\n'}
              {'\n'}
              Should you wish to return any items, you must contact our office
              for a return authorization number along with return instructions,
              this will allow us to ensure there will be no delay in issuing
              your refund.
              {'\n'}
              {'\n'}
              We can give you a store credit for the purchase price of the
              returned items, or we can refund the purchase price less a 20%
              restocking and handling fee to the Credit Card or PayPal account
              on which your order was placed.
              {'\n'}
              {'\n'}
              Please understand that it took us time to process your order. Your
              credit will be processed 10-20 days from its receipt back to the
              store.
              {'\n'}
              {'\n'}
              Please Contact Us within 60 days of the shipment date to receive
              authorization and return instructions. You can email us with your
              questions, comments or concerns at any time. We welcome and
              appreciate your feedback. We hope that you enjoy shopping at
              Pawhealer, and feel confident about your purchases.
              {'\n'}
              {'\n'}
              Please note that without a return authorization we will not refund
              your purchase.
              {'\n'}
              {'\n'}
              If you Refuse your Delivery you will be responsible for all
              charges associated with it's Refusal and these Fees will be
              deducted from your Refund Amount. The Minimum Amount to be
              deducted will be 20% of the purchase price on your Invoice and No
              Refund on Shipping & Handling. If no bottles or products are
              included in Return or your Return is PAST 60 DAYS - which will be
              viewed as Violation of Return Policy - there will be a Minimum
              Amount of 30% deducted and up to a Maximum Amount of 50% deducted
              from your Return.
              {'\n'}
              {'\n'}
              Please Note: there is NO REFUND on Special Request Encapsulation
              Fees (for products where Encapsulation Fee is not offered on our
              website) {'\n'}
              ** Please Note: a single Return can only be made ONCE per person
              per household. We have the right to deny any Return at our own
              discretion.{'\n'}***Please Note: there is NO REFUND on food items
              (Florazyme LP, Florazyme EFA, PawZymes, Trachea Chews, Pet GO,
              Rena GO, Immu GO, Thyro GO glandular/organs powder & wafers,
              Peanut Butter Treats, Salmon Treats, Beef Bon Bons)
            </Text>

            <Text style={styles.terms}>Terms Of Use Privacy Policy</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Return;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  content_container: {
    flex: 0.8,
    top: responsiveHeight(2),
    position: 'relative',
  },
  content: {
    borderWidth: responsiveWidth(0.1),
    borderRadius: responsiveWidth(6),
    marginHorizontal: responsiveWidth(5),
    borderColor: '#000',
    paddingHorizontal: responsiveWidth(4.5),
    paddingVertical: responsiveHeight(1),
  },
  txt: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    lineHeight: responsiveHeight(3),
    letterSpacing: 0.5,
    paddingVertical: responsiveHeight(2),
  },
  txt_question: {
    color: '#000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Bold',
  },
  terms: {
    textAlign: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    color: '#000',
    fontSize: responsiveFontSize(1.4),
  },
});
