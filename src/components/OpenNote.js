import React, { useState } from 'react'
import {FaStar,FaRegStar,FaTrashAlt} from "react-icons/fa";

function OpenNote() {
    const [isStared, setIsStared] = useState(false);

    const handleNoteStarButton = (event) => {
        event.stopPropagation();
        setIsStared(!isStared);
    }

    const handleDeleteNote = (event) => {
        event.stopPropagation();
        console.log("Delete note ");
    }

    const handleCloseNote = ()=>{
        console.log("Close note");
    }
  return (
    <div className='open-note-container' onClick={handleCloseNote}>
        <div className='open-note-box'>
        <div className='note-header'>
            <div className='note-header-first-row'>
                <div className='note-header-first-row-col'>
                    <button className='note-star-btn' onClick={handleNoteStarButton}>
                        {isStared ? <FaStar/> : <FaRegStar/>} 
                    </button>
                    <h3 className='note-title'>First note</h3>
                </div>
                <button className='note-trash-btn' onClick={handleDeleteNote}>
                    <FaTrashAlt />
                </button>
            </div>
            <small className='note-date'>
                21/08/2023
            </small>
            

        </div>
        <div className='note-content'>
            <p>
                Text of this note
            </p>
        </div>
        </div>
        
    </div>
  )
}

export default OpenNote