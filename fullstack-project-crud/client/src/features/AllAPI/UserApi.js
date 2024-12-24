import createApi, { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = `${process.env.REACT_APP_URL}/user`;
export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: () => ({

            })
        }),
        userSignIn: builder.mutation({
            query: () => ({

            })
        })
    })
})

const { useUserSignUpMutation } = userAPI