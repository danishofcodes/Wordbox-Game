import React from 'react'

export default function Modal({ isCorrect, turn, usedKeys, solution }) {
   function reload() {
    window.location.reload();
   }
   
    return (
        <div className='modal-card'>


            {isCorrect && (
                <>
                    <div> <h1> You Win </h1> </div>
                    <p>{solution}</p>
                </>
            )}

            {!isCorrect && (
                <>
                    <div> <h1> Ah!you exhausted all turns! better luck next time</h1> </div>
                    
                    <p><b>Word : </b>"{solution}"</p>
                    <br></br>
                </>
            )
            }

           <button onClick={reload}>Start New Game</button>
        </div>
    )
}
