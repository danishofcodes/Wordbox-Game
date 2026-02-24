// import { useEffect, useState } from "react";
// import useWordbox from "../hooks/useWordbox";
// import Grid from "./Grid";
// import Keypad from "./Keypad";
// import Modal from "./Modal";

// export default function Wordbox({ solution }) {
//   const [showModal, setShowModal] = useState(false);

//   const {
//     currentGuess,
//     handleKeyup,
//     guesses,
//     isCorrect,
//     turn,
//     usedKeys,
//   } = useWordbox(solution);

//   // Keyboard input
//   useEffect(() => {
//     window.addEventListener("keyup", handleKeyup);
//     return () => window.removeEventListener("keyup", handleKeyup);
//   }, [handleKeyup]);

//   // Game over logic
//   useEffect(() => {
//     if (isCorrect || turn > 5) {
//       setTimeout(() => setShowModal(true), 2000);
//     }
//   }, [isCorrect, turn]);

//   return (
//     <div className="wordbox">
    
//         {/* <button
//           className="help-btn"
//           onClick={() => setShowHelp(true)}
//         >
//           How to Play
//         </button> */}
    
//       {/* Help Modal */}
    

//       {/* Game Grid */}
//       <Grid
//         currentGuess={currentGuess}
//         guesses={guesses}
//         turn={turn}
//       />

//       {/* Keypad */}
//       <Keypad usedKeys={usedKeys} />

//       {/* End Game Modal */}
//       {showModal && (
//         <Modal
//           isCorrect={isCorrect}
//           turn={turn}
//           solution={solution}
//         />
//       )}

     
//     </div>
//   );
// }


// import { useEffect, useState, useRef } from "react";
// import useWordbox from "../hooks/useWordbox";
// import Grid from "./Grid";
// import Keypad from "./Keypad";
// import Modal from "./Modal";

// export default function Wordbox({ solution }) {
//   const [showModal, setShowModal] = useState(false);
//   const inputRef = useRef(null);

//   const {
//     currentGuess,
//     handleKeyup,
//     guesses,
//     isCorrect,
//     turn,
//     usedKeys,
//   } = useWordbox(solution);

//   // Desktop keyboard input
//   useEffect(() => {
//     window.addEventListener("keyup", handleKeyup);
//     return () => window.removeEventListener("keyup", handleKeyup);
//   }, [handleKeyup]);

//   // Mobile keyboard input via hidden input
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     const lastChar = value[value.length - 1] || "";
//     if (lastChar) handleKeyup({ key: lastChar });
//     e.target.value = ""; // Clear input after each key press
//   };

//   // Focus input on load and on tap
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   // Game over logic
//   useEffect(() => {
//     if (isCorrect || turn > 5) {
//       setTimeout(() => setShowModal(true), 2000);
//     }
//   }, [isCorrect, turn]);

//   return (
//     <div className="wordbox" onClick={() => inputRef.current?.focus()}>
// {/* inp for mobile */}
//       <input
//         ref={inputRef}
//         type="text"
//         autoComplete="off"
//         autoCorrect="off"
//         spellCheck="false"
//         onChange={handleInputChange}
//         style={{
//           position: "absolute",
//           opacity: 0,
//           pointerEvents: "none",
//         }}
//       />

//       <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />

//       {/* Keys used */}
//       <Keypad usedKeys={usedKeys} />

//       {/* End Game Modal */}
//       {showModal && (
//         <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import useWordbox from "../hooks/useWordbox";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";
import Hints from "./Hints";

export default function Wordbox({ solution }) {
  const [showModal, setShowModal] = useState(false);
  // const inputRef = useRef(null);

  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordbox(solution);

  // Desktop physical keyboard
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  // Mobile soft keyboard
  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   const lastChar = value[value.length - 1] || "";
  //   if (lastChar) handleKeyup({ key: lastChar });
  //   e.target.value = ""; 
  // };

  
  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  // Game over logic
  useEffect(() => {
    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [isCorrect, turn]);

  return (

    
    <div className="wordbox" >
      {/* onClick={() => inputRef.current?.focus()} */}
      {/* Hidden input for mobile typing */}
      {/* <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        onChange={handleInputChange}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      /> */}

      {/* Game grid */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />

      {/* On-screen keypad */}
      <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} />
    
      <Hints solution={solution}/>
      {/* End Game Modal */}
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}