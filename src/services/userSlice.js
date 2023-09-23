import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseDomain}/` }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users/',
      transformResponse: (response) => response.data[0],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

