import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import OpenNote from './components/OpenNote'
import { nanoid } from 'nanoid';

import {FaPlus, FaSearch} from 'react-icons/fa';
import AddNote from './components/AddNote';

function App() {

  const initNotes = () => {
    localStorage.setItem('notesList',JSON.stringify([]));
    return '[]';
  }

  const [notes, setNotes] = useState(localStorage.getItem('notesList') ? (JSON.parse(localStorage.getItem('notesList'))) : (JSON.parse(initNotes())));


  const [openedNote, setOpenedNote] = useState(null);
  const [openNewNote, setOpenNewNote] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  useEffect(()=>{
    localStorage.setItem('notesList',JSON.stringify(notes));
  },[notes]);


  
  console.log(notes);

  const addNote = (noteData) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      title: noteData.title,
      star: false,
      date: date.toLocaleDateString("en-GB"),
      content: noteData.content,
      color: noteData.color
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
    console.log("notes - ",notes);
    notes.forEach(note => {
      if(note.id === id){
        setOpenedNote(note);
      }
    });
  }

  const handleCloseNote = () => {
    setOpenedNote(null);
  }

  const switchFromNewToEdit = (id) => {
    handleCloseNewNote();
    handleOpenNote(id);
  }

  const handleEditNote = (editedNoteData) => {
    const updatedNotes = [...notes];
    const date = new Date();

    updatedNotes.forEach((note)=>{
      if(note.id === editedNoteData.id){
        note.content = editedNoteData.content;
        note.title = editedNoteData.title;
        note.date= date.toLocaleDateString("en-GB");
        note.star = editedNoteData.star;
        note.color = editedNoteData.color;
      }
    });
    setNotes(updatedNotes);
  }

  const handleSearchBar = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className='app-container'>
      {openedNote !== null ? (<OpenNote noteData={openedNote} closeNote={handleCloseNote} deleteNote={handleDeleteNote} editNote={handleEditNote} />) : ""}
      {openNewNote ? (<AddNote handleAddNote={addNote} closeNewNote={handleCloseNewNote} />) : ""}
      <div className='app-header'>
        <h1>Notes list</h1>
        <div className='search-input-container'>
          <input onChange={handleSearchBar} />
          <FaSearch />
        </div>
        <button className='add-note-btn' onClick={handleNewNoteBtn}><FaPlus/>New note</button>
      </div>
      {
        notes.length === '0' ? 
        (<h3>Nothing to see here</h3>) : 
        (<NotesList starNote={handleStarNote} deleteNote={handleDeleteNote} openNote={handleOpenNote} notes={notes} searchInput={searchInput} />)
      }
    </div>
  )
}

export default App