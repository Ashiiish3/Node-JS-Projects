import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from "react-bootstrap";
import { useCreateNoteMutation } from '../features/AllAPI/NoteApi';
import { toast } from 'react-toastify';

export default function CreateNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const [createNote, { isLoading, isError, isSuccess, data, error }] = useCreateNoteMutation()
  const HandleSubmit = async (e) => {
    e.preventDefault()
    await createNote({ title, content, image }).unwrap()
    console.log(isLoading)
    console.log(isError)
    console.log(data)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Note created successfully");
    }
    if (isError) {
      toast.error(error?.data?.message || "Something went wrong")
    }
  }, [isSuccess, isError, error])


  return (
    <div className='d-flex' style={{ height: "100vh" }}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form className="p-4 border rounded bg-light" onSubmit={HandleSubmit}>
          <h5 className="text-center mb-4">Make New Note</h5>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Enter content" onChange={(e) => setContent(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setImage(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}