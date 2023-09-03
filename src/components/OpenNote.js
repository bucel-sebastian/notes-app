import React, { useEffect, useState } from 'react'
import {FaStar,FaRegStar,FaTrashAlt, FaTimes} from "react-icons/fa";
import ColorSwitcher from './ColorSwitcher';

function OpenNote({noteData, closeNote, editNote, deleteNote}) {
    const noteId = noteData.id;

    const [noteTitle, setNoteTitle] = useState(noteData.title);
    const [noteContent, setNoteContent] = useState(noteData.content);
    const [noteStar, setNoteStar] = useState(noteData.star);
    const [noteColor, setNoteColor] = useState(noteData.color);

    const handleNoteStarButton = (event) => {
        event.stopPropagation();
        setNoteStar(!noteStar);
    }

    const handleDeleteNote = (event) => {
        event.stopPropagation();
        deleteNote(noteId);
        closeNote();
    }

    const handleCloseNote = ()=>{
        console.log("Close note");
        closeNote();
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

    useEffect(()=>{
        const editedNoteData = {
            id: noteId,
            title: noteTitle,
            star: noteStar,
            content: noteContent,
            color: noteColor
        };
        editNote(editedNoteData);   
    },[noteContent,noteTitle,noteStar,noteColor]);

  return (
    <div className='open-note-container' onClick={handleCloseNote}>
        <div className='open-note-box' style={{backgroundColor: noteColor}} onClick={(event)=>{
            event.stopPropagation();
        }}>
            <div className='note-header'>
                <div className='note-header-first-row'>
                    <div className='note-header-first-row-col'>
                        <button className='note-star-btn' onClick={handleNoteStarButton}>
                                {noteStar ? <FaStar/> : <FaRegStar/>} 
                        </button>
                        <h3 className='note-title'>
                            <input className='edit-note-title' maxLength={50} value={noteTitle} onChange={handleNoteTitleChange} />
                        </h3>
                    </div>
                    <button className='note-trash-btn' onClick={handleDeleteNote}>
                        <FaTrashAlt />
                    </button>
                    <button className='note-cancel-btn' onClick={handleCloseNote}>
                        <FaTimes />
                        Close
                    </button>
                </div>
                <small className='note-date'>
                    {noteData.date}
                </small>
                    

            </div>
            <div className='note-content'>
                <textarea className='edit-note-content' value={noteContent} onChange={handleNoteContentChange} />
            </div>
            <div className='note-footer'>
                <ColorSwitcher switchColor={handleSwitchColor}/>
            </div>
        </div>
        
    </div>
  )
}

export default OpenNote