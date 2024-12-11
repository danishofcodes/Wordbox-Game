import { useState } from "react"

export default function useWordbox(solution) {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState([]);
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});  //   {a:'green'}
    const formatGuess = () => {
        //  console.log("formatting guess", currentGuess);4
        let solutionArr = [...solution];

        let formattedGuessArr = [...currentGuess].map((letter) => {
            return { key: letter, color: 'grey' };
        });

        formattedGuessArr.forEach((alphabet, idx) => {
            if (solutionArr[idx] == alphabet.key) {
                formattedGuessArr[idx].color = 'green';
                solutionArr[idx] = null;
            }
        })

        formattedGuessArr.forEach((alphabet, idx) => {
            if (solutionArr.includes(alphabet.key) && alphabet.color != 'green') {
                formattedGuessArr[idx].color = 'yellow';
                solutionArr[solutionArr.indexOf(alphabet.key)] = null;
            }
        })

        

        return formattedGuessArr;

    }

    const addNewGuess = (formatGuessArr) => {
      if(currentGuess == solution){
        setIsCorrect(true)
        // console.log("Won", isCorrect)
      }
    
      setGuesses((prev)=>{
        let newGuesses = [...prev];
        newGuesses[turn] = formatGuessArr        
        return newGuesses;
      })
       
      setHistory((prev)=>{
        return [...prev, currentGuess]
      })

      setTurn((prev)=>{
        return prev+1;
      })
    
      setUsedKeys((prev)=>{
    let newKeys = {...prev};
    formatGuessArr.forEach((letter)=>{
       const currentColor = newKeys[letter.key];
       
       if(letter.color == 'green'){
        newKeys[letter.key] = 'green';
        return;
       }


       if(letter.color == 'yellow' && currentColor != "green"){
        newKeys[letter.key] = 'yellow';
        return;

       }


       if(letter.color == 'grey' && currentColor != "green" && currentColor!="yellow"){
        newKeys[letter.key] = 'grey';
        return;

       }

       
    }) 
        return newKeys;
      });


      setCurrentGuess('');
    }



    const handleKeyup = ({ key }) => {

        if (key === 'Enter') {
            if (turn > 5) {
                console.log("all guesses turn used");
                return;
            }

            if (history.includes(currentGuess)) {
                console.log(history)
                console.log('Word already tried once!');
                return
            }

            if (currentGuess.length !== 5) {
                console.log("Word must be 5 letters long")
                return;
            }

            const formatted = formatGuess();
            addNewGuess(formatted)
            // console.log(formatted)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                console.log("complete", currentGuess)
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }

        console.log("history", history)
    }
    return { turn, currentGuess, guesses, isCorrect, handleKeyup , usedKeys}
}
