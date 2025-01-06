import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteCard({ note }) {
    const getImage = (image) => {
        if (image.includes("http")) {
            return image
        } else {
            return `${process.env.REACT_APP_URL}/${image}`
        }
    }
    return (
        <div>
            <div className="note-admin-card">
                <div className="note-admin-image">
                    <img
                        src={getImage(note.notesImage)}
                        alt="Note image"
                    />
                </div>
                <div className='note-admin-body'>
                    <div className="note-admin-title">
                        <h6>{note.title || 'Title'}</h6>
                    </div>
                    <div className='note-admin-content'>
                        <p>{note.content || "Content"}</p>
                    </div>
                    <div className="note-admin-actions">
                        <button className='btn btn-primary'>
                            <Link to={`/updateNotebyAdmin/${note._id}`} style={{ textDecoration: "none", color: "white" }} >
                                Edit
                            </Link>
                        </button>
                        <button className='btn btn-danger'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}