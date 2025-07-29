import { useState } from "react";

const colors = ["#e6659e", "#c576dd", "#f6d365", "#5ed9f4", "#b5db9f"];

const NoteInput = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[4]);

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text, selectedColor);
      setText("");
    }
  };

  return (
    <div className="note-input">
      <textarea
        value={text}
        placeholder="Enter your note here..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="color-picker">
        {colors.map((color) => (
          <span
            key={color}
            className={`color ${color === selectedColor ? "selected" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
            {color === selectedColor && "✔"}
          </span>
        ))}
      </div>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default NoteInput;
