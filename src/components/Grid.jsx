import React from 'react'
import Row
 from './Row'
export default function Grid({turn, currentGuess, guesses}) {
  return (
    <div>
        {guesses.map((guess, idx)=>{
            if(turn === idx){
                return <Row key={idx} currentGuess={currentGuess}/>
            }
            return <Row key={idx} guess={guess} currentGuess/>
        })}
    </div>
  )
}
