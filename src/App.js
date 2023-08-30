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
  const [openNewNote, setOpenNewNote] = useState(false);

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

  const handleNewNoteBtn = () => {
    setOpenNewNote(true);
  }

  const handleCloseNewNote = () =>{
    setOpenNewNote(false);
  }


  const switchFromNewToEdit = (id) => {
    
  }

  const handleStarNote = (id) => {
    const updatedNotes = [...notes];
    updatedNotes.forEach(note => {
      if(note.id === id){
        note.star = !note.star;
      }
    });
    setNotes(updatedNotes);
  }

  const handleDeleteNote = (id) => {
    const updatedNotes = [...notes];
    notes.forEach((note,index) => {
      if(note.id === id){
        updatedNotes.splice(index,1);
      }
    });
      setNotes(updatedNotes);
  }

  const handleOpenNote = (id) => {
    console.log("open note - ",id);
    notes.forEach(note => {
      if(note.id === id){
        setOpenedNote(note);
      }
    });
  }

  const handleCloseNote = () => {
    setOpenedNote(null);
  }

  return (
    <div className='app-container'>
      {openedNote !== null ? (<OpenNote noteData={openedNote} closeNote={handleCloseNote} starNote={handleStarNote} deleteNote={handleDeleteNote} />) : ""}
      {openNewNote ? (<AddNote handleAddNote={addNote} closeNewNote={handleCloseNewNote} />) : ""}
      <div className='app-header'>
        <h1>Notes list</h1>
        <button className='add-note-btn' onClick={handleNewNoteBtn}><FaPlus/>New note</button>
      </div>
      {
        notes.length === '0' ? 
        (<h3>Nothing to see here</h3>) : 
        (<NotesList starNote={handleStarNote} deleteNote={handleDeleteNote} openNote={handleOpenNote} notes={notes}/>)
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