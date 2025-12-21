import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<any[], void>({
            query: () => 'posts',
            providesTags: ['Posts'],
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Posts'],
        })
    })
})

export const { useGetPostsQuery, useAddPostMutation } = api;