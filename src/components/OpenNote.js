import React, { useState } from 'react'
import {FaStar,FaRegStar,FaTrashAlt} from "react-icons/fa";

function OpenNote({noteData, closeNote, starNote, editNote, deleteNote}) {
    const noteId = noteData.id;

    const handleNoteStarButton = (event) => {
        event.stopPropagation();
        starNote(noteId);
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
  return (
    <div className='open-note-container' onClick={handleCloseNote}>
        <div className='open-note-box' onClick={(event)=>{
            event.stopPropagation();
        }}>
        <div className='note-header'>
            <div className='note-header-first-row'>
                <div className='note-header-first-row-col'>
                    <button className='note-star-btn' onClick={handleNoteStarButton}>
                        {noteData.star ? <FaStar/> : <FaRegStar/>} 
                    </button>
                    <h3 className='note-title'>{noteData.title}</h3>
                </div>
                <button className='note-trash-btn' onClick={handleDeleteNote}>
                    <FaTrashAlt />
                </button>
            </div>
            <small className='note-date'>
                {noteData.date}
            </small>
            

        </div>
        <div className='note-content'>
            <p>
                {noteData.content}
            </p>
        </div>
        </div>
        
    </div>
  )
}

export default OpenNote