import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Privacy = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 0.17}}>
        <View style={{height: '100%'}}>
          <Header Heading={'Privacy Policy'} color={'#fff'} />
        </View>
      </View>
      <View style={styles.content_container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View>
            <Text style={styles.txt}>
              This Privacy Policy governs the manner in which PawHealer.com
              collects, uses, maintains and discloses information collected from
              users (each, a "User") of the www.PawHealer.com website ("Site").
              This privacy policy applies to the Site and all products and
              services offered by PawHealer.com.
            </Text>
            <Text style={styles.txt_question}>
              Personal identification information
            </Text>
            <Text style={styles.txt}>
              We may collect personal identification information from Users in a
              variety of ways, including, but not limited to, when Users visit
              our site, place an order, respond to a survey, fill out a form,
              and in connection with other activities, services, features or
              resources we make available on our Site. Users may be asked for,
              as appropriate, name, email address, mailing address, phone
              number, credit card information. Users may, however, visit our
              Site anonymously. We will collect personal identification
              information from Users only if they voluntarily submit such
              information to us. Users can always refuse to supply personally
              identification information, except that it may prevent them from
              engaging in certain Site related activities.
            </Text>
            <Text style={styles.txt_question}>
              Non-personalidentification information
            </Text>
            <Text style={styles.txt}>
              We may collect non-personal identification information about Users
              whenever they interact with our Site. Non-personal identification
              information may include the browser name, the type of computer and
              technical information about Users means of connection to our Site,
              such as the operating system and the Internet service providers
              utilized and other similar information.
            </Text>

            <Text style={styles.txt_question}>Web browser cookies</Text>

            <Text style={styles.txt}>
              Our Site may use "cookies" to enhance User experience. User's web
              browser places cookies on their hard drive for record-keeping
              purposes and sometimes to track information about them. User may
              choose to set their web browser to refuse cookies, or to alert you
              when cookies are being sent. If they do so, note that some parts
              of the Site may not function properly.
            </Text>

            <Text style={styles.txt_question}>
              How we use collected information
            </Text>

            <Text style={styles.txt}>
              PawHealer.com may collect and use Users personal information for
              the following purposes: To improve customer serviceInformation you
              provide helps us respond to your customer service requests and
              support needs more efficiently. To personalize user experienceWe
              may use information in the aggregate to understand how our Users
              as a group use the services and resources provided on our Site. To
              improve our SiteWe may use feedback you provide to improve our
              products and services. To process paymentsWe may use the
              information Users provide about themselves when placing an order
              only to provide service to that order. We do not share this
              information with outside parties except to the extent necessary to
              provide the service. To run a promotion, contest, survey or other
              Site featureTo send Users information they agreed to receive about
              topics we think will be of interest to them. To send periodic
              emailsWe may use the email address to send User information and
              updates pertaining to their order. It may also be used to respond
              to their inquiries, questions, and/or other requests. If User
              decides to opt-in to our mailing list, they will receive emails
              that may include company news, updates, related product or service
              information, etc. If at any time the User would like to
              unsubscribe from receiving future emails, we include detailed
              unsubscribe instructions at the bottom of each email or User may
              contact us via our Site.
            </Text>

            <Text style={styles.txt_question}>
              How we protect your information
            </Text>

            <Text style={styles.txt}>
              We adopt appropriate data collection, storage and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure or destruction of your personal
              information, username, password, transaction information and data
              stored on our Site.{'\n'}
              {'\n'}
              Sensitive and private data exchange between the Site and its Users
              happens over a SSL secured communication channel and is encrypted
              and protected with digital signatures.
            </Text>
            <Text style={styles.txt_question}>
              Sharing your personal information
            </Text>

            <Text style={styles.txt}>
              We do not sell, trade, or rent Users personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding visitors and users with our business partners, trusted
              affiliates and advertisers for the purposes outlined above. We may
              use third party service providers to help us operate our business
              and the Site or administer activities on our behalf, such as
              sending out newsletters or surveys. We may share your information
              with these third parties for those limited purposes provided that
              you have given us your permission.
            </Text>
            <Text style={styles.txt_question}>
              Request erasure of Your Personal Data
            </Text>
            <Text style={styles.txt}>
              You have the right to ask Us to delete or remove Personal Data
              when there is no good reason for Us to continue processing it.
            </Text>

            <Text style={styles.txt_question}>
              Changes to this privacy policy
            </Text>
            <Text style={styles.txt}>
              PawHealer.com has the discretion to update this privacy policy at
              any time. When we do, we will post a notification on the main page
              of our Site, revise the updated date at the bottom of this page
              and send you an email. We encourage Users to frequently check this
              page for any changes to stay informed about how we are helping to
              protect the personal information we collect. You acknowledge and
              agree that it is your responsibility to review this privacy policy
              periodically and become aware of modifications.
            </Text>
            <Text style={styles.txt_question}>
              Your acceptance of these terms
            </Text>
            <Text style={styles.txt}>
              By using this Site, you signify your acceptance of this policy. If
              you do not agree to this policy, please do not use our Site. Your
              continued use of the Site following the posting of changes to this
              policy will be deemed your acceptance of those changes.
            </Text>

            <Text style={styles.txt_question}>Contacting us</Text>

            <Text style={styles.txt}>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at:
              <Text
                style={{
                  color: 'rgba(243, 147, 58, 1)',
                  textDecorationLine: 'underline',
                }}>
                www.PawHealer.com
              </Text>
              2466 Royal Oak Dr, Escondido, CA 92029(866)
              958-7541info@pawhealer.com
            </Text>
            <Text style={styles.terms}>Terms Of Use Privacy Policy</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Privacy;

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
    // paddingVertical: responsiveHeight(1),
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
