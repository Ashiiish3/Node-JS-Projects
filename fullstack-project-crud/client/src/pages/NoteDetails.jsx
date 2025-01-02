import React from 'react'
import { Container } from 'react-bootstrap'
import { useGetSingleNoteQuery } from '../features/AllAPI/NoteApi'
import { useParams } from 'react-router-dom'

export default function NoteDetails() {
  const {noteId} = useParams()
  console.log(noteId)
  const {isError, isLoading, isSuccess,data} = useGetSingleNoteQuery(noteId)
  console.log(data?.isNoteExist)
  return (
    <Container>
      <div>
        <img src={data?.isNoteExist?.notesImage} alt="" />
      </div>
      <div>
        <h5>{data?.isNoteExist?.name}</h5>
      </div>
      <div>
        <p>dsf</p>
      </div>
    </Container>
  )
}