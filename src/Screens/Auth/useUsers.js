import {useNavigation} from '@react-navigation/native';
import {handlePostRequest, showToast} from '../../Utlies/helpers';
import {
  useLazyForgetPasswordQuery,
  useLoginMutation,
  useSignupMutation,
  useVerifyOtpMutation,
} from '../../Store/Auth';
import {useDispatch} from 'react-redux';
import {setAccessToken} from '../../Store/Slice';

export const useSignUp = () => {
  const [signup, {isLoading, isFetching}] = useSignupMutation();
  const navigation = useNavigation();
  const handleSignup = async data => {
    try {
      const body = {...data, device_type: 'ios', device_token: 'test'};
      const res = await handlePostRequest(signup, body);
      console.log('res', res);
      if (res?.success) {
        navigation.navigate('Otp', {email: body.email});
      }
    } catch (err) {
      showToast('error', err);
    }
  };
  return {handleSignup, isLoading};
};

export const useVerifyOtp = () => {
  const navigation = useNavigation();
  const [verify, {isLoading, isFetching}] = useVerifyOtpMutation();

  const handleVerifyOtp = async (data, email) => {
    try {
      let body = {verification_code: data.otp.join(''), email};
      const res = await handlePostRequest(verify, body);
      console.log('res', res);
      if (res?.success) {
        navigation.navigate('Login');
      }
    } catch (err) {
      showToast('error', err);
    }
  };
  return {handleVerifyOtp, isLoading};
};

export const useLogin = () => {
  const navigation = useNavigation();
  const [login, {isLoading, isFetching}] = useLoginMutation();
  const dispatch = useDispatch();
  const handleLogin = async data => {
    try {
      let body = {...data, device_type: 'ios', device_token: 'test'};
      const res = await handlePostRequest(login, body);
      if (res?.success) {
        dispatch(setAccessToken(res?.data?.data?.user?.access_token));
      }
    } catch (err) {
      showToast('error', err);
    }
  };
  return {handleLogin, isLoading};
};

export const useForgetPassword = () => {
  const navigation = useNavigation();
  const [forget, {isLoading, isFetching}] = useLazyForgetPasswordQuery();
  const handleForget = async data => {
    try {
      console.log('data', data);
      const res = await handlePostRequest(forget, data);
      console.log('res', res);
      if (res?.success) {
        navigation.navigate('Otp', {email: data.email});
      }
    } catch (err) {
      showToast('error', err);
    }
  };
  return {handleForget, isLoading};
};
