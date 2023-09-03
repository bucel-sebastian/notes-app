import React, { useEffect, useState } from 'react'
import Note from './Note'

function NotesList({notes, starNote, openNote, deleteNote, searchInput}) {

  const [staredNotes,setStaredNotes] = useState(0);

  const handleOpenNote = (id) => {
    openNote(id);
  }

  const handleStarNote = (id) =>{
    starNote(id);
  }

  const handleDeleteNote = (id) => {
    deleteNote(id);
  }

  useEffect(()=>{
    let numOfNotes = 0;
    notes.forEach(note => {
      if(note.star){
        numOfNotes++;
      }
    });
    setStaredNotes(numOfNotes);
  },[notes])
  
  return (
    <div>
      {(staredNotes > 0 && searchInput === '') ? (<div>
        <h2>Stared notes</h2>
        <div className='notes-list'>
          {
            notes.map((note)=>{
              if(note.star === true){
                return <Note openNote={handleOpenNote} starNote={handleStarNote} deleteNote={handleDeleteNote} noteData={note} key={note.id}/>
              }
            })
          }
        </div>
      </div>) : ""}
          
          <h2>All notes</h2>
        <div className='notes-list'>
            {
                searchInput === '' ? notes.map((note)=>(
                    <Note openNote={handleOpenNote} starNote={handleStarNote} deleteNote={handleDeleteNote} noteData={note} key={note.id}/>

                )) : notes.filter(note => note.title.toLowerCase().includes(searchInput.toLowerCase())).map(note=>(
                  <Note openNote={handleOpenNote} starNote={handleStarNote} deleteNote={handleDeleteNote} noteData={note} key={note.id}/>
                ))
            }
            

        </div>
    </div>
  )
}

export default NotesList