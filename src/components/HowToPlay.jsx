export default function HowToPlay({ onClose }) {
  return (
    <div className="how-to-play-overlay">
      <div className="how-to-play">
        <h2>How to Play</h2>

        <p>
          Use your <strong>keyboard</strong> or the on-screen{" "}
          <strong>keypad</strong> to guess the hidden word.
        </p>

        <ul>
          <li className="htp-li">
            <span className="key green">Green</span> means the
            letter is in the word and in the correct position.
          </li>
          <li className="htp-li">
            <span className="key yellow">Yellow</span> means the
            letter is in the word but in the wrong position.
          </li>
          <li className="htp-li">
            <span className="key grey">Grey</span> means the
            letter is not in the word.
          </li>
        </ul>

        <p>You have limited guesses. Choose wisely!</p>

        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}