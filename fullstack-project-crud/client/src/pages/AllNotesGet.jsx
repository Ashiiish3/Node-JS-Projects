import React from 'react'
import { useGetAllNotesByAdminQuery } from '../features/AllAPI/AdminApi'

export function AllNotesGet() {
  const {data, isLoading} = useGetAllNotesByAdminQuery()
  return (
    <div style={{ minHeight: "100vh" }} className='d-flex flex-column flex-md-row'>
      <div className='container notes-container'>
sadfsdf
      </div>
    </div>
  )
}