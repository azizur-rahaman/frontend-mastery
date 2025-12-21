import { User } from '@/lib/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['Users']
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            })
        }),
        updateUser: builder.mutation<User, User>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Users'],
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        })
    })
});

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = api;