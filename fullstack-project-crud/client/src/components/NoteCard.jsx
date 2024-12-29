import React from 'react'
import { Button } from 'react-bootstrap'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function NoteCard({ note }) {
  const getImage = (image) => {
    if (image.includes("http")) {
      return image
    } else {
      return `${process.env.REACT_APP_URL}/${image}`
    }
  }
  return (
    <div className="note-card">
      <div className="note-image">
        <img
          src={getImage(note.notesImage)}
          alt="Note image"
        />
      </div>
      <div className="note-title">
        <h5>{note.title || 'Title'}</h5>
      </div>
      <div className="note-content">
        <p>{note.content || 'Content'}</p>
      </div>
      <div className="note-actions">
        <Button variant="transparent" size="lg">
          <MdModeEdit />
        </Button>
        <Button variant="transparent" size="lg">
          <MdDelete />
        </Button>
      </div>
    </div>
  )
}