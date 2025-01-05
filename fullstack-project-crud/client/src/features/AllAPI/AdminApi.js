import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${process.env.REACT_APP_URL}/note`;
export const adminAPI = createApi({
    reducerPath: "AdminAPI",
    tagTypes: ["Admin"],
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: "include" }),
    endpoints: (builder) => ({
        getAllNotesByAdmin: builder.query({
            query: () => ({
                url: "/getAllNotesAdmin",
                method: "GET"
            }),
            providesTags: ['Admin']
        }),
        deleteNoteByAdmin: builder.mutation({
            query: (noteId) => ({
                url: `/deleteNotesAdmin/${noteId}`,
                method: "DELETE"
            })
        })
    })
})

export const { useGetAllNotesByAdminQuery, useDeleteNoteByAdminMutation } = adminAPI