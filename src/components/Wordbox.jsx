import React, { useEffect } from 'react'
import useWordbox from '../hooks/useWordbox'
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordbox({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordbox(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
       

        if(isCorrect){
            console.log("congrats you win!");
            window.removeEventListener('keyup', handleKeyup);

        }


        if(turn > 5 ){
            console.log("unlucky out of guesses")
            window.removeEventListener('keyup', handleKeyup);

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
            <div>


            </div>
        </div>
    )
}
