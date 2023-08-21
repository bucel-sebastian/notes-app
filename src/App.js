import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import OpenNote from './components/OpenNote'
import { nanoid } from 'nanoid';

import {FaPlus} from 'react-icons/fa';

function App() {

  const [notes, setNotes] = useState([
        {
          id: nanoid(),
          title: "First note title",
          star: false,
          date: "15/04/2023",
          content: "Text of this first note"
        },
        {
          id: nanoid(),
          title: "Second note title",
          star: true,
          date: "16/04/2023",
          content: "Text of this second note"
        },
        {
          id: nanoid(),
          title: "Third note title",
          star: false,
          date: "15/04/2023",
          content: "Text of this third note"
        },
        {
          id: nanoid(),
          title: "Fourth note title",
          star: false,
          date: "15/04/2023",
          content: "Text of this fourth note"
        },
        {
          id: nanoid(),
          title: "Fifth note title",
          star: false,
          date: "15/04/2023",
          content: "Text of this fifth note"
        }
    ]);


  console.log(notes.length);

    useEffect(()=>{
      const storedNotes = localStorage.getItem('notesList');

      if (storedNotes === null) {
        localStorage.setItem('notesList',JSON.stringify(notes))
      } else {
        setNotes(JSON.parse(localStorage.getItem('notesList')))
      }
      
    },[]);

  const [openedNote, setOpenedNote] = useState(null);

    

  const handleNewNoteBtn = () => {

  }

  return (
    <div className='app-container'>
      {/* <OpenNote /> */}
      <div className='app-header'>
        <h2>Notes list</h2>
        <button className='add-note-btn' onClick={handleNewNoteBtn}><FaPlus/>New note</button>
      </div>
      {notes.length === '0' ? 
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