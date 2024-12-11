import React, { useEffect, useState } from 'react'
// import useWordbox from '../hooks/useWordbox';

export default function Keypad({usedKeys}) {
   const [letters, setLetters] =  useState(null);
    //  const {handleKeyup} =  useWordbox();
   useEffect(()=>{
      async function fetchLetters(){
        const response = await fetch("http://localhost:3000/letters");
        const json = await response.json();

        setLetters(json);
      }

      fetchLetters();
   })
  
   return (
    <div>
            <div className='keypad'>

        {
            letters && letters.map((letter, idx)=>{
                const color = usedKeys[letter.key];
                return <div className={`${color} key`} key={idx}>
                    {letter.key}
                </div>
            })
        }
        </div>
    </div>
  )
}
