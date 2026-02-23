import React, { useEffect, useState } from "react";
import data from "../../data/data"

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(data.letters);
  }, []); 

  return (
    <div className="keypad">
      {letters.map((letter, idx) => {
        const color = usedKeys[letter.key];
        return (
          <div className={`${color} key`} key={idx}>
            {letter.key}
          </div>
        );
      })}
    </div>
  );
}