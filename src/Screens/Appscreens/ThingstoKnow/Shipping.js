import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Shipping = ({navigation}) => {
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
            Heading={'Shipping Policy'}
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
              Within the United States, we ship all of our products -- directly
              to you -- from our warehouse located in San Diego, California USA.
            </Text>
            <Text
              style={[
                styles.txt,
                {textDecorationLine: 'underline', color: 'red'},
              ]}>
              UPDATED 09.15.23 -- ALERT: DUE TO LIMITED TRANSPORTATION
              AVAILABILITY AND AS A RESULT OF WEATHER IMPACTS (WEATHER IS THE
              MAJOR ISSUE IN SEPTEMBER 2023), PACKAGE DELIVERY TIMES MAY BE
              EXTENDED.
            </Text>
            <Text style={styles.txt_question}>
              Delivery Time Guidelines for the United States
            </Text>
            <Text style={styles.txt}>
              All orders received before 10:30 a.m. PST (1:30 p.m EST) will be
              processed the same business day, as long as the items are in stock
              and the customer's billing address matches that on file with their
              financial institution. If the billing address does not match the
              address on file with the financial institution, we cannot ship
              your order until we confirm the correct address. All orders
              received after 10:30 a.m. PST will be processed the next business
              day. Customers who provide their email addresses will have USPS
              Tracking # emailed to them when their Order ships. We do not ship
              orders on Saturdays or Sundays.
            </Text>
            <Text style={styles.txt_question}>
              FREE: 4 - 7 Business Days* Please expect USPS delivery delays—we
              appreciate your patience & understanding.
            </Text>
            <Text style={styles.txt}>
              With FREE Shipping, your order will be delivered 4-7 business days
              after all your items are available to ship, including pre-order
              items. *AK, HI & PR: 5 – 9 Business Days
            </Text>
            <Text
              style={[
                styles.txt_question,
                {
                  fontStyle: 'italic',
                  color: 'gray',
                  marginBottom: responsiveHeight(2),
                },
              ]}>
              PawHealer reserves the right to change the shipping method at its
              own discretion and expense. PawHealer is not responsible for
              delays caused by weather, transportation delays by UPS or USPS or
              other natural disasters.
            </Text>
            <Text style={styles.txt_question}>
              Two-Day Shipping: 2 - 3 Business Days* If you need your package
              delivered in timely - please select this service as USPS is doing
              a pretty decent job in getting these delivered within 2-4 days.
            </Text>
            <Text style={styles.txt}>
              *AK, HI & PR: 2 – 4 Business DaysWe use Priority Mail by USPS and
              this service is usually a 2 Business Days Delivery time. However,
              this is NOT a Guaranteed Service by USPS and can take 2-3 Business
              Days depending on how close you live to Major Metropolitan area -
              the closer you live to a Major Metro Area the faster the Delivery
              time - which is typically 2 Business Days.(Please Note: We do not
              ship orders on Saturdays or Sundays or major holidays - your items
              will ship the next Business Day as long as they are in stock)
            </Text>
            <Text
              style={[
                styles.txt_question,
                {fontStyle: 'italic', color: 'gray'},
              ]}>
              PawHealer reserves the right to change the shipping method at its
              own discretion and expense. PawHealer is not responsible for
              delays caused by weather, transportation delays by UPS or USPS or
              other natural disasters.
            </Text>
            <Text style={styles.txt}>
              USPS Express Mail or UPS Next Day Air Shipping: 1 – 2 Business
              Days (this is our fastest Service -- and is Guaranteed Service to
              be Delivered in 1-2 Days in USA only -- as of 09.15.23 -- we have
              reinstated Express Mail from USPS -- and will use at our
              discretion - which carrier to use - depending on each individual
              city's circumstances regarding Weather Conditions (fires, heat and
              smoke in the Summer, excessive rain/snow/wind conditions in the
              Fall of 2023) in Shipping Hubs across the USA and Truck Driver
              Shortage -- and the historical/statistical speed with which we see
              UPS or USPS has been delivering our packages over the last few
              months.*AK, HI & PR: 1 – 3 Business DaysUSA Overnight Shipping &
              Handling - Please understand that choosing UPS Second Day or UPS
              Next Day Air Shipping does not necessarily mean your order will be
              in your hands tomorrow. While most orders do ship on the same day
              if ordered before 10:30 AM PST, some will be shipped on the
              following day. You will receive your order 1-2 Business Days after
              the order has been processed, which in most cases is within 24
              hours. We do not ship orders on Saturdays or Sundays or major
              holidays. A signature may be required for your deliveries.
            </Text>
            <Text style={styles.txt_question}>
              Please note, orders placed after 10:30 a.m. PST (1:30 p.m. EST) on
              a Friday/Holiday will be processed on the subsequent business day.
              Send emails to
              <Text
                style={{
                  color: 'rgba(243, 147, 58, 1)',
                  textDecorationLine: 'underline',
                }}>
                info@pawhealer.com
              </Text>
              for Delivery questions.
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(1.1),
                color: '#000',
                marginTop: responsiveHeight(2),
              }}>
              *Please also note that Aromatherapy, Treats, Nutritionals are not
              qualified for Free Shipping*
            </Text>
            <Text style={styles.terms}>Terms Of Use Privacy Policy</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Shipping;

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
    paddingVertical: responsiveHeight(3),
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
