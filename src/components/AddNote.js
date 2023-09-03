import React, { useState } from 'react'
import {FaStar,FaRegStar,FaTimes, FaSave} from "react-icons/fa";
import ColorSwitcher from './ColorSwitcher';

function AddNote({handleAddNote,closeNewNote}) {

    const [noteTitle,setNoteTitle] = useState('');
    const [noteContent,setNoteContent] = useState('');
    const [noteColor, setNoteColor] = useState('#FFF9B1');

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
        const noteData = {
            title: noteTitle,
            content: noteContent,
            color: noteColor
        };
        handleAddNote(noteData)
    }

    const handleNoteTitleChange = (event) => {
        setNoteTitle(event.target.value);
    }

    const handleNoteContentChange = (event) => {
        setNoteContent(event.target.value);
    }

    const handleSwitchColor = (color) =>{
        setNoteColor(color);
    }


  return (
    <div className='open-note-container' onClick={handleCloseNote}>
        <div className='open-note-box' style={{backgroundColor: noteColor}} onClick={(event)=>{event.stopPropagation();}}>
            <div className='note-header'>
                <div className='note-header-first-row'>
                    <div className='note-header-first-row-col'>
                        
                        <h3 className='note-title'>
                            <input placeholder='Note title' className='edit-note-title' maxLength={50} value={noteTitle} onChange={handleNoteTitleChange}/>
                        </h3>
                    </div>
                    <button className='note-save-btn' onClick={handleSaveNewNote}>
                        <FaSave />
                        Save
                    </button>
                    <button className='note-cancel-btn' onClick={handleCloseNewNote}>
                        <FaTimes />
                        Cancel
                    </button>
                </div>
                <small className='note-date'>
                    21/08/2023
                </small>
                

            </div>
            <div className='note-content'>
                <textarea placeholder='Note content' className='edit-note-content' value={noteContent} onChange={handleNoteContentChange} />

            
            </div>
            <div className='note-footer'>
                <ColorSwitcher switchColor={handleSwitchColor}/>
            </div>
        </div>
        
    </div>
  )
}

export default AddNote