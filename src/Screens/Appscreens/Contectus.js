import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useForm} from 'react-hook-form';
import Fields from '../../Common/Fields/Fields';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import CoustomButton from '../../Common/CoustomButton.js/CoustomButton';
import {colors} from '../../Utlies/constant/Themes';

const Contectus = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  useEffect(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    AvoidSoftInput.setAdjustPan(true);
  }, []);
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 0.17}}>
        <Header Heading={'Contect Us'} color={'#fff'} />
      </View>
      <View style={styles.content_container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View>
            <Text style={styles.txt_question}>
              Get Expert Answers You Can Trust!
            </Text>
            <Text style={styles.txt}>
              If you have a question about one of our herbal formulas, its usage
              or dosage, ask us about it here! Just fill out the form below,
              send it to us and we will do our best to get you your answer
              within 3 hours.
            </Text>
            <Text style={styles.txt_question}>Submit Us Your Question:</Text>

            <View>
              <Fields
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'FirstName'}
                letterSpacing={0.5}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'First Name'}
                textbgcolor={'#000'}
              />
              <Fields
                error={errors}
                letterSpacing={0.5}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'LastName'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'Last Name'}
                textbgcolor={'#000'}
              />
              <Fields
                letterSpacing={0.5}
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'email'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'Enter email'}
                textbgcolor={'#000'}
              />
              <Fields
                letterSpacing={0.5}
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'Re-type_Email'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'Re-type Email Address'}
                textbgcolor={'#000'}
              />
              <Fields
                letterSpacing={0.5}
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'Phone'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'Phone'}
                textbgcolor={'#000'}
              />
              <Fields
                letterSpacing={0.5}
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'Cell/Nighttime-Tel'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'Cell/Nighttime Tel '}
                textbgcolor={'#000'}
              />
              <Fields
                letterSpacing={0.5}
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'Best time to Cell'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'Best time to Cell'}
                textbgcolor={'#000'}
              />
              <Fields
                letterSpacing={0.5}
                error={errors}
                errorcolor={'red'}
                alignSelf={true}
                control={control}
                name={'--Please Select--'}
                style={{
                  backgroundColor: 'rgba(224, 237, 222, 0.8)',
                  marginTop: responsiveHeight(1.5),
                }}
                placeholder={'--Please Select--'}
                textbgcolor={'#000'}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '700',
                  color: '#000',
                  marginTop: responsiveHeight(2),
                }}>
                Prefer Phone call or Email:
              </Text>
              <View style={{height: responsiveHeight(10)}}>
                {/* <FieldsControler
                  Mtext={'By Phone'}
                  fontFamily={'Poppins-Regular'}
                  name={'By_Phone'}
                  control={control}
                /> */}
              </View>
              <View>
                <Fields
                  letterSpacing={0.5}
                  error={errors}
                  errorcolor={'red'}
                  alignSelf={true}
                  control={control}
                  name={'What Questions can we answer for you?'}
                  style={{
                    backgroundColor: 'rgba(224, 237, 222, 0.8)',
                    marginTop: responsiveHeight(1.5),
                    height: responsiveHeight(15),
                  }}
                  multiline={true}
                  inputstyle={{
                    height: responsiveHeight(15),
                    fontSize: responsiveFontSize(1.4),
                  }}
                  placeholder={'What Questions can we answer for you?'}
                  textbgcolor={'#000'}
                />
              </View>

              <CoustomButton
                bgcolor={colors.AppColor}
                text={'Send Request'}
                style={{
                  borderRadius: responsiveWidth(7),
                  marginVertical: responsiveHeight(2),
                  height: responsiveHeight(7),
                }}
                textcolor={'#fff'}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Contectus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  content_container: {
    flex: 0.83,
    // top: responsiveHeight(2),
  },
  content: {
    marginHorizontal: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(4.5),
    paddingVertical: responsiveHeight(1),
    overflow: 'hidden',
  },
  txt: {
    color: '#000',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    lineHeight: responsiveHeight(3),
    letterSpacing: 0.5,
  },
  txt_question: {
    color: '#000',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Poppins-Bold',
    paddingVertical: responsiveHeight(2),
  },
  terms: {
    textAlign: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    color: '#000',
    fontSize: responsiveFontSize(1.4),
  },
});
