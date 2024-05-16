import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler() {
    if (isEditing) {
      setPlayerName(playerName);
    }
    setIsEditing((editing) => !editing);
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={changeHandler}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
