import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const About = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 0.17}}>
        <View style={{height: '100%'}}>
          <Header Heading={'About Us'} color={'#fff'} />
        </View>
      </View>
      <View style={styles.content_container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View>
            <Text style={styles.txt_question}>
              Herbs for Dogs. Natural Remedies Made for Canines.
            </Text>
            <Text style={styles.txt}>
              We offer herbs for dogs and cats. We specialize in Traditional
              Chinese Medicine herbal formulas. We sell a variety of herbals
              that are based on Traditional Chinese Herbal patterns. TCM herbal
              formulas are a very complex system, and difficult to understand.
              But the effort to educate pet owners is well worth the effort
              because the results are incredibly effective. As a result of
              keeping true to the tradition of TCM, the Pawhealer brand products
              are top-rated and used by pet owners worldwide. Herbs for dogs and
              cats are truly effective and offer an alternative to some of the
              harsher modern methods of medicine, and the two can be used
              together to achieve the health of your dog or cat.{'\n'}
              {'\n'}Perhaps you're looking for joint support for your dog? We
              have them! Are you searching for herbs to help relieve your dog's
              hot spots, itchiness or other skin related issues? No problem! How
              about herbs to help your dog's seasonal allergies, cough symptoms
              or bladder issues? Of course, all you need is to ask. We have way
              too many remedies to put them all up on one website, so ask us,
              and we will respond to you with product{'\n'}
              {'\n'}recommendations that will be based on the patterns of
              traditional herbal formulas.
              {'\n'}
              {'\n'}Our mission is to reach out to each of our customers. Here
              is a chance to experience authentic Traditional Chinese Herbs. We
              have a website rich in content about Chinese herbal theory, and
              all formulas are sold using traditional herbal theory patterns of
              identification. Ancient Chinese herbal theory is a fascinating
              subject. All one has to do is think about way back in the day,
              when the ancient herbal masters didn't have all the blood tests,
              MRI's, X Rays, and surgeries, and yet they used herbs and
              acupuncture to deal with disease and fight epidemics.....And now
              in our current times, and although there is the current advent of
              modern medicines, other parts of the world continue to integrate
              traditional methods right along with the modern systems. It's
              called an integrative approach to well being, why not use both! So
              let us together use this traditional herbal method to restore your
              dog's Yin or balance your cat's Yang, boost that Qi, or tonify and
              supplement what may be deficient. Chinese herbs excel at helping
              pets who have patterns of Chinese theory of imbalances.
            </Text>
            <Text style={[styles.txt_question]}>Why Are We Different?</Text>
            <Text style={styles.txt}>
              We can help through using the metaphorical language of Traditional
              Chinese Herbal language to understand what herbs and particular
              herbal formulas will help supplement your dog or cat's Chinese
              herbal theory metaphorical pattern of disharmony. We bring the
              complex world of Chinese herbs to you, while breaking it all down,
              and making it interesting.
            </Text>
            <Text style={styles.txt}>
              We love to help people help their pets. Welcome!{'\n'}
              {'\n'}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default About;

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
