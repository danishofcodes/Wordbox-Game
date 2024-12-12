import React, { useEffect, useState } from 'react'
import useWordbox from '../hooks/useWordbox'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordbox({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordbox(solution);

    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
       

        if(isCorrect){
            console.log("congrats you win!");
            window.removeEventListener('keyup', handleKeyup);
            setTimeout(()=>{
                setShowModal(true)
            },2000)
        }


        if(turn > 5 ){
            console.log("unlucky out of guesses")
            window.removeEventListener('keyup', handleKeyup);
            setTimeout(()=>{
                setShowModal(true)
            },2000)
        }

        
        return () => window.removeEventListener('keyup', handleKeyup);


    }, [handleKeyup, isCorrect]);

    // useEffect(() => {
    //     console.log(guesses, turn, isCorrect)
    // }, [guesses, turn, isCorrect]);

    return (
        <div>
            {/* {currentGuess} */}
            <p>solution-{solution}</p>
         
           <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>

           <Keypad usedKeys = {usedKeys}/>

          {showModal && <Modal isCorrect={isCorrect} turn={turn} usedKeys={usedKeys} solution={solution}/>} 

            <div>


            </div>
        </div>
    )
}
