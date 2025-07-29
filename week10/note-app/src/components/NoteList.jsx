const NoteList = ({ notes }) => {
  return (
    <div className="notes">
      {notes.map((note, index) => (
        <div
          key={index}
          className="note"
          style={{ backgroundColor: note.color }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
