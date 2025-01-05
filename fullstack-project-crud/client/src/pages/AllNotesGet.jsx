import React, { useEffect } from 'react'
import { useGetAllNotesByAdminQuery } from '../features/AllAPI/AdminApi'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { NotesSkeleton } from '../components/NotesSkeleton'
import NoteCard from '../app/adminPage/NoteCard'

export function AllNotesGet() {
  const { data, isLoading, isSuccess } = useGetAllNotesByAdminQuery()
  useEffect(() => {
    if (isSuccess) {
    }
  }, [data, isLoading, isSuccess])
  return (
    <div style={{ minHeight: "100vh" }} className='d-flex flex-column flex-md-row'>
      <div className='container notes-container'>
        {
          data?.AllNotes.length > 0 ? data?.AllNotes.map((note, i) => <NoteCard note={note} key={i} />) : isLoading ? [1, 2, 3, 4, 5, 7, 6, 8, 9, 10].map((ele, i) => <NotesSkeleton key={i} />) : <Container className="py-5">
            <Row className="justify-content-center">
              <Col md={8} className="text-center">
                <Alert variant="warning" className="p-4 shadow-sm">
                  <h1 className="display-6 text-warning">No Notes Available</h1>
                  <p className="text-muted mt-3">
                    It seems like there are no notes to display at the moment. Please add some notes to view them here.
                  </p>
                </Alert>
              </Col>
            </Row>
          </Container>
        }
      </div>
    </div>
  )
}