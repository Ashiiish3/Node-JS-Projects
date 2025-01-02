import React from 'react'

export function NotesSkeleton() {
  return (
    <div className='animate-pulse'>
      <div className='skeleton-image'>
      </div>
      <div className='skeleton-title'>
      </div>
      <div className='skeleton-buttons'>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}