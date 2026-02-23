import { useEffect, useState } from "react";
import useWordbox from "../hooks/useWordbox";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordbox({ solution }) {
  const [showModal, setShowModal] = useState(false);

  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    turn,
    usedKeys,
  } = useWordbox(solution);

  // Keyboard input
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  // Game over logic
  useEffect(() => {
    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [isCorrect, turn]);

  return (
    <div className="wordbox">
    
        {/* <button
          className="help-btn"
          onClick={() => setShowHelp(true)}
        >
          How to Play
        </button> */}
    
      {/* Help Modal */}
    

      {/* Game Grid */}
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
      />

      {/* Keypad */}
      <Keypad usedKeys={usedKeys} />

      {/* End Game Modal */}
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
        />
      )}

     
    </div>
  );
}