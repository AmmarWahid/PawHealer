import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {Api} from '../Utlies/constant/Api';
export let Api = 'https://pawheeler.project-demo.live/api/v1/';
export const pawhealerApis = createApi({
  reducerPath: 'pawhealerApis',
  baseQuery: fetchBaseQuery({
    baseUrl: Api,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');
    },
  }),

  endpoints: build => ({
    Signup: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `register`,
          body,
        };
      },
    }),
    VerifyOtp: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `verify-otp`,
          body,
        };
      },
    }),
    Login: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `login`,
          body,
        };
      },
    }),
    forgetPassword: build.query({
      query(body) {
        console.log('body', body);
        return {
          method: 'GET',
          url: `forget-password?email=${body.email}`,
        };
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useForgetPasswordQuery,
  useVerifyOtpMutation,
} = pawhealerApis;
