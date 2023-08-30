import React, { useState } from 'react'
import {FaStar,FaRegStar,FaTimes} from "react-icons/fa";

function AddNote({handleAddNote,closeNewNote}) {

    const [noteTitle,setNoteTitle] = useState('');
    const [noteContent,setNoteContent] = useState('');

    const handleCloseNewNote = (event) => {
        event.stopPropagation();
        console.log("Delete note ");
    }

    const handleCloseNote = ()=>{
        closeNewNote();
    }

    const handleSaveNewNote = ()=>{
        if(noteTitle === '' && noteContent === ''){
            return;
        }
        handleAddNote(noteTitle,noteContent)
    }

    const handleNoteTitleChange = (event) => {
        setNoteTitle(event.target.value);
    }

    const handleNoteContentChange = (event) => {
        setNoteContent(event.target.value);
    }

  return (
    <div className='open-note-container' onClick={handleCloseNote}>
        <div className='open-note-box' onClick={(event)=>{event.stopPropagation();}}>
            <div className='note-header'>
                <div className='note-header-first-row'>
                    <div className='note-header-first-row-col'>
                        
                        <h3 className='note-title'>
                            <input placeholder='Note title' className='edit-note-title' maxLength={50} value={noteTitle} onChange={handleNoteTitleChange}/>
                        </h3>
                    </div>
                    <button onClick={handleSaveNewNote}>
                        Save
                    </button>
                    <button className='note-trash-btn' onClick={handleCloseNewNote}>
                        <FaTimes />
                    </button>
                </div>
                <small className='note-date'>
                    21/08/2023
                </small>
                

            </div>
            <div className='note-content'>
                <textarea placeholder='Note content' className='edit-note-content' value={noteContent} onChange={handleNoteContentChange} />

            
            </div>
        </div>
        
    </div>
  )
}

export default AddNote