import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">
      {started ? (
        <Quiz />
      ) : (
        <StartScreen onStart={() => setStarted(true)} />
      )}
    </div>
  );
}

export default App;
