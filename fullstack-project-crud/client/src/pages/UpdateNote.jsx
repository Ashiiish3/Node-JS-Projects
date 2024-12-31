import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetSingleNoteQuery } from '../features/AllAPI/NoteApi'

export default function UpdateNote() {
    const { noteId } = useParams()
    const { data, isError, isLoading, isSuccess, refetch } = useGetSingleNoteQuery(noteId)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState(null)
    const HandleImageChange = (e, setState) => {
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = () => {
            setState(reader.result)
        }
        reader.readAsDataURL(file)
        console.log(file)
    }
    useEffect(() => {
        if (isSuccess && data?.isNoteExist) {
            const { title, content, notesImage } = data?.isNoteExist
            setTitle(title)
            setContent(content)
            setImage(notesImage)
            console.log(data?.isNoteExist)
        }
    }, [isSuccess, data])
    const getImage = (image) => {
        console.log(image)
        if (image.includes("http")) {
            return image
        } else {
            return `${process.env.REACT_APP_URL}/${image}`
        }
    }

    return (
        <div className='d-flex' style={{ height: "100vh" }}>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Form className="p-4 border rounded bg-light" style={{ maxWidth: '500px', width: '100%' }}>
                    <h5 className="text-center mb-4">Update Note</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content:</Form.Label>
                        <Form.Control type="text" placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" accept="image" onChange={(e) => HandleImageChange(e, setPreviewImage)} />
                    </Form.Group>
                    {image && (
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Image Preview</Form.Label>
                            <div className="d-flex justify-content-center align-items-center bg-light p-3 border rounded">
                                <Image
                                    src={previewImage || getImage(image)}
                                    alt="Preview"
                                    rounded
                                    className="img-fluid"
                                    style={{ maxWidth: '50%', height: 'auto' }}
                                />
                            </div>
                        </Form.Group>
                    )}
                    <Button variant="primary" type="submit" className="w-100">
                        Update Note
                    </Button>
                </Form>
            </Container>
        </div>
    )
}