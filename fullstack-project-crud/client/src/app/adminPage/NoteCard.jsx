import React from 'react'
import { Button } from 'react-bootstrap'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function NoteCard({note}) {
    const getImage = (image) => {
        if (image.includes("http")) {
          return image
        } else {
          return `${process.env.REACT_APP_URL}/${image}`
        }
      }
    return (
        <div>
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
                <div className="note-actions">
                    <Button variant="transparent" size="lg">
                        <Link to={`/UpdateNote/${note._id}`}>
                            <MdModeEdit />
                        </Link>
                    </Button>
                    <Button className="my-2">
                        <Link to={`/noteDetails/${note._id}`} style={{ textDecoration: "none" }} className='text-white'>
                            View More
                        </Link>
                    </Button>
                    <Button variant="transparent" size="lg">
                        <MdDelete className="text-danger" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
