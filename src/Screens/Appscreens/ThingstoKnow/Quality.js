import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Quality = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 0.17}}>
        <View style={{height: '100%'}}>
          <Header Heading={'Quality and Safety'} color={'#fff'} />
        </View>
      </View>
      <View style={styles.content_container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View>
            <Text style={styles.txt}>
              Many people raise their concerns about the safety and use of
              Chinese herbal formulas, thus a short introduction of what makes a
              Chinese herbal formula unique is important.
            </Text>
            <Text style={styles.txt}>
              Chinese herbal formulas may contain as few as two and up to as
              many as twenty herbs and more within any given herbal remedy. Each
              individual herb within a formula has a particular job to do and
              that is to work as a team member to create a synergistic effect!
            </Text>
            <Text style={styles.txt}>
              It is this blending of herbs in certain combinations that
              minimizes side effects that may occur if an herb were to be used
              alone. Chinese herbs are not intended for single-use because they
              should only be used in concert within a formula to achieve the
              ultimate in safety and effectiveness.
            </Text>
            <Text style={styles.txt}>
              We always want to ensure that anything we are giving to our
              beloved pet is of high quality and free from harmful heavy metals
              or toxic substances.
            </Text>
            <Text style={styles.txt}>
              Our U.S. distributors of Chinese herbs use suppliers that
              mandatorily provide standardized and rigorous testing that
              includes the following:
            </Text>
            <Text style={styles.txt_question}>Authentication Tests:</Text>
            <Text style={styles.txt}>
              Organoleptic{'\n'}Microscopic{'\n'}TLC (verify identification)
              {'\n'}
              HPLC (verify identification){'\n'}Physical Analysis:{'\n'}
              Appearance Uniformity{'\n'}Weight Uniformity {'\n'}Loss on Drying
              Dissolution{'\n'}Time Purity Analysis{'\n'}:Microbes:{'\n'}Total
              Bacterial Count{'\n'}
              Total Yeast and Mold {'\n'}E.coliE {'\n'}Salmonella {'\n'}
              Staphylococcus
              {'\n'}Heavy Metals/Pesticides:{'\n'}Lead{'\n'}Arsenic{'\n'}
              Mercury {'\n'}Cadmium{'\n'}Pesticides(over 100 types tested)
              {'\n'}
              Sulfur Dioxide {'\n'}
              {'\n'}Every bottle shipped from
              <Text
                style={{
                  color: 'rgba(243, 147, 58, 1)',
                  textDecorationLine: 'underline',
                }}>
                {''} PawHealer.com{' '}
              </Text>
              has been an assigned lot number and each number is stored for fast
              reference within a customer record. Each order tracks back to the
              original herbal lot number for every customer.
            </Text>
            <Text style={styles.terms}>Terms Of Use Privacy Policy</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Quality;

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
    paddingVertical: responsiveHeight(1.5),
  },
  txt: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    lineHeight: responsiveHeight(3),
    letterSpacing: 0.5,
    paddingVertical: responsiveHeight(1),
  },
  txt_question: {
    color: '#000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Bold',
  },
  terms: {
    textAlign: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(3),
    color: '#000',
    fontSize: responsiveFontSize(1.4),
  },
});
