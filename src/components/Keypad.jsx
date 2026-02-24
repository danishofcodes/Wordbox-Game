import React, { useEffect, useState } from "react";
import data from "../data/data";

export default function Keypad({ usedKeys, handleKeyup }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(data.letters);
  }, []);

  const handleClick = (key) => {
    handleKeyup({ key });
  };

  return (
    <div>
    <div className="keypad">
      {letters.map((letter, idx) => {
        const color = usedKeys[letter.key] || "";
        return (
          <div
            key={idx}
            className={`${color} key`}
            onClick={() => handleClick(letter.key)}
          >
            {letter.key}
          </div>
        );
      })}

      
    </div>

    <div className="actions-key">
      <div className="key special" onClick={() => handleClick("Enter")}>
        Enter
      </div>
      <div className="key special" onClick={() => handleClick("Backspace")}>
        ⌫
      </div>
      </div>
    </div>
  );
}