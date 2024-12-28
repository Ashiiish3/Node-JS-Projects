import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${process.env.REACT_APP_URL}/note`;
export const notesAPI = createApi({
    reducerPath: "notesAPI",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: "include" }),
    endpoints: (builder) => ({
        createNote: builder.mutation({
            query: (data) => ({
                url: "/create",
                method: "POST",
                body: data
            })
        }),
        deleteNote: builder.mutation({
            query: (noteId) => ({
                url: `/delete/${noteId}`,
                method: "DELETE"
            })
        }),
        getAllNote: builder.query({
            query: (userId) => ({
                url: `/getAllNotes/${userId}`
            })
        }),
        getSingleNote: builder.query({
            query: (noteId) => ({
                url: `/getSingleNote/${noteId}`
            })
        }),
        updateNote: builder.mutation({
            query: ({noteId, data}) => ({
                url: `updateNotes/${noteId}`,
                method: "PATCH",
                body: data
            })
        })
    })
})

export const { useCreateNoteMutation, useDeleteNoteMutation, useGetAllNoteQuery, useGetSingleNoteQuery, useUpdateNoteMutation } = notesAPI;