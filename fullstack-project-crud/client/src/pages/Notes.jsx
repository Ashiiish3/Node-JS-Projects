import React from 'react'
import { useGetAllNoteQuery } from '../features/AllAPI/NoteApi'

export default function Notes() {
  // const [getAllNote, { isLoading, isError, isSuccess, data }] = useGetAllNoteQuery()
  console.log(useGetAllNoteQuery)
  return (
    <div style={{minHeight: "100vh"}} className='d-flex flex-column flex-md-row'>
      <div className='w-100'>
        <h1 className='text-3xl font-semibold'>Notes resulte:</h1>
        <div className='p-4 d-flex flex-wrap gap-4'>
            <p className='text-xl text-gray-500'>No notes found.</p>
            
            <button className='btn btn-link text-teal-500 p-3'>Show More</button>
        </div>
      </div>
    </div>
  )
}
