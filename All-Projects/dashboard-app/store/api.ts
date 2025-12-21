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
            }),

            async onQueryStarted(user, {dispatch, queryFulfilled}) {
                const tempId = Date.now();

                const patchResult = dispatch(
                    api.util.updateQueryData('getUsers', undefined, (draft) => {
                        draft.push({id: tempId, ...user} as User);
                    })
                );

                try{
                    const {data: created} = await queryFulfilled;

                    dispatch(
                        api.util.updateQueryData('getUsers', undefined, (draft) => {
                            const index = draft.findIndex((u) => u.id === tempId);
                            if(index !== -1) draft[index] = created;
                        })
                    );
                } catch {
                    patchResult.undo();
                }
            }

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

            async onQueryStarted(id, {dispatch, queryFulfilled}){
                //1. Optimistically update cache
                const patchResult = dispatch(
                    api.util.updateQueryData('getUsers', undefined, (draft) => {
                        return draft.filter((user) => user.id != id);
                    })
                )

                try{
                    //2. Wait for server response
                    await queryFulfilled;
                }catch {
                    //3. Rollback if failed
                    patchResult.undo();
                }
            },
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