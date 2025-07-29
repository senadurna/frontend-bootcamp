import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 

  // Sayfa ilk yüklendiğinde localStorage'dan görevleri al
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setTasks(parsed);
      }
    }
    setIsMounted(true); 
  }, []);

  // Sadece sayfa yüklendikten sonra localStorage’a yaz
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isMounted]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="header">ToDo App</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={handleInputChange}
        />
        <button className="add-button" type="submit">Add</button>
      </form>

      {showToast && <div className="toast">Görev eklendi!</div>}

      <ul className="todo-list">
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
