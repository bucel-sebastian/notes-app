import React from 'react'
import Note from './Note'

function NotesList({notes}) {
  return (
    <div>
        <div className='notes-list'>
            {
                notes.map((note)=>(
                    <Note noteData={note} key={note.id} />

                ))
            }
            

        </div>
    </div>
  )
}

export default NotesList