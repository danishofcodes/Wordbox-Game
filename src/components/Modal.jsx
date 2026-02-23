import React from 'react'

export default function Modal({ isCorrect, turn, usedKeys, solution }) {
   function reload() {
    window.location.reload();
   }
   
    return (
        <div className='modal-backdrop'>

        <div className='modal-card'>


            {isCorrect ? <div> <h1> Yay! You Win! 🎉</h1> </div> : <div> <h1> Woops !you exhausted all turns!😭</h1> </div> }
            <p><b>The word was: </b>"{solution}"</p>
            <br></br>
            <button onClick={reload}>Start New Game</button>
        </div>
        </div>
    )
}
