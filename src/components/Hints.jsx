import React, { useState } from "react";

export default function Hints({ solution }) {
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    setShowHint(true);
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <button
        className="hint-btn btn"
        onClick={handleClick}
        disabled={showHint} 
      >
        Show Hint
      </button>
      {showHint && (
        <div style={{ marginTop: "8px", fontSize: "1.2rem", fontWeight: "bold" }}>
          First Letter: {solution[0].toUpperCase()}
        </div>
      )}
    </div>
  );
}