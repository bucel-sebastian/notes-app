import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import OpenNote from './components/OpenNote'
import { nanoid } from 'nanoid';

import {FaPlus} from 'react-icons/fa';
import AddNote from './components/AddNote';

function App() {

  const initNotes = () => {
    localStorage.setItem('notesList',JSON.stringify([]));
    return '[]';
  }

  const [notes, setNotes] = useState(localStorage.getItem('notesList') ? (JSON.parse(localStorage.getItem('notesList'))) : (JSON.parse(initNotes())));


  const [openedNote, setOpenedNote] = useState(null);

  useEffect(()=>{
    localStorage.setItem('notesList',JSON.stringify(notes));
  },[notes]);


  
  console.log(notes);

  const addNote = (title,content) => {


    const date = new Date();

    const newNote = {
      id: nanoid(),
      title: title,
      star: false,
      date: date.toLocaleDateString("en-GB"),
      content: content
    }

    const newNotes = [...notes,newNote];
    setNotes(newNotes);
    switchFromNewToEdit(newNote.id);
  }

  const handleNewNoteBtn = () => {}


  const switchFromNewToEdit = (id) => {
    
  }

  return (
    <div className='app-container'>
      {/* <OpenNote /> */}
      <AddNote handleAddNote={addNote} />
      <div className='app-header'>
        <h2>Notes list</h2>
        <button className='add-note-btn' onClick={handleNewNoteBtn}><FaPlus/>New note</button>
      </div>
      {
        notes.length === '0' ? 
        (<h3>Nothing to see here</h3>) : 
        (<NotesList notes={notes}/>)
      }
    </div>
  )
}

export default App


//   const [notes, setNotes] = useState([
//     {
//       id: nanoid(),
//       title: "First note title",
//       star: false,
//       date: "15/04/2023",
//       content: "Text of this first note"
//     },
//     {
//       id: nanoid(),
//       title: "Second note title",
//       star: true,
//       date: "16/04/2023",
//       content: "Text of this second note"
//     },
//     {
//       id: nanoid(),
//       title: "Third note title",
//       star: false,
//       date: "15/04/2023",
//       content: "Text of this third note"
//     },
//     {
//       id: nanoid(),
//       title: "Fourth note title",
//       star: false,
//       date: "15/04/2023",
//       content: "Text of this fourth note"
//     },
//     {
//       id: nanoid(),
//       title: "Fifth note title",
//       star: false,
//       date: "15/04/2023",
//       content: "Text of this fifth note"
//     }
// ]);