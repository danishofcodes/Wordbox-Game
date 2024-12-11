import { useEffect, useState } from 'react'
import Wordbox from './components/Wordbox';


function App() {
const [solution, setSolution] = useState([])

useEffect(()=>{

  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    if (!response.ok) {
      throw new Error("Failed to fetch words");
    
    }
   
    if(response.ok){
      const json = await response.json();
    // console.log(json)
    const randomWord =  json[Math.floor(Math.random()*json.length)]
      setSolution(randomWord.word)

    
    }
  }

  fetchWords();
 
},[])
console.log(solution)

  return (
    <> 
<h1>Wordbox</h1>


{solution && <Wordbox solution={solution}/>}

    </>
  )
}

export default App
