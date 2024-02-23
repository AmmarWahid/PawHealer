import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Api} from './Auth';

export const getBaseQuery = fetchBaseQuery({
  baseUrl: Api,
  prepareHeaders: (headers, {getState}) => {
    const token = getState().Slice.accestoken;
    headers.set('Accept', 'application/json');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
console.log(getBaseQuery);
export const getMainApis = createApi({
  baseQuery: getBaseQuery,
  tagTypes: ['UPDATE', 'ORDERS'],
  endpoints: builder => ({
    getAllCategories: builder.query({
      query() {
        return {
          method: 'GET',
          url: `categories`,
        };
      },
    }),
    Addfav: builder.mutation({
      query(body) {
        return {
          method: 'POST',
          url: 'favourites',
          body: body,
        };
      },
      invalidatesTags: ['UPDATE'],
    }),
    getAllfav: builder.query({
      query() {
        return {
          method: 'GET',
          url: 'favourites',
        };
      },
      providesTags: ['UPDATE'],
    }),
    deletefav: builder.mutation({
      query(id) {
        console.log('productid', id);
        return {
          method: 'DELETE',
          url: `favourites${id}`,
        };
      },
      invalidatesTags: ['UPDATE'],
    }),
    createorder: builder.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `orders`,
          body: body,
        };
      },
      invalidatesTags: ['ORDERS'],
    }),
    getorder: builder.query({
      query() {
        return {
          method: 'GET',
          url: `orders`,
        };
      },

      providesTags: ['ORDERS'],
    }),

    Getme: builder.mutation({
      query() {
        return {
          method: 'POST',
          url: `me`,
        };
      },
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useAddfavMutation,
  useGetAllfavQuery,
  useDeletefavMutation,
  useCreateorderMutation,
  useGetorderQuery,
  useGetmeMutation,
} = getMainApis;
