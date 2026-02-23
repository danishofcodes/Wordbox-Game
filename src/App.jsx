import { useEffect, useState } from "react";
import Wordbox from "./components/Wordbox";
import data from "./data/data";
import HowToPlay from "./components/HowToPlay";
import Footer from "./components/Footer";


function App() {
  const [solution, setSolution] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
  //  fetch way
    /*
    async function fetchWords() {
      const response = await fetch("http://localhost:3000/words");
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }

      const json = await response.json();
      const randomWord = json[Math.floor(Math.random() * json.length)];
      setSolution(randomWord.word);
    }

    fetchWords();
    */


    const randomWord =
      data.words[Math.floor(Math.random() * data.words.length)];
    setSolution(randomWord.word);
  }, []);

  // console.log(solution);

  return (
 <>
<header className="app-header">
  <div className="header-content">
    <h1 className="logo">WORD<span>BOX</span></h1>
    
    <button className="help-btn"onClick={() => setShowHelp(true)}>How to Play</button>
  </div>
</header>

{solution && <Wordbox solution={solution} />} 

   {showHelp && (<HowToPlay onClose={() => setShowHelp(false)} />)}

<Footer/>
</>
 );

}

export default App;