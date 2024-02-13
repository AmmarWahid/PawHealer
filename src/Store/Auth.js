import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {Api} from '../Utlies/constant/Api';
export let Api = 'http://pawheeler.project-demo.live/api/v1/';
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
        console.log('body', body);
        return {
          method: 'POST',
          url: `register`,
          body,
        };
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginUserMutation,
  useForgetpasswordMutation,
} = pawhealerApis;
