import { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const addNote = (text, color) => {
    setNotes([{ text, color }, ...notes]);
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>NotesApp</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <NoteInput onAdd={addNote} />
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default App;
