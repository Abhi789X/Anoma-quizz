import { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(null);

  const handleStart = () => setStart(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center glass">
      {!start ? (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome to Anoma Quiz</h1>
          <input
            className="bg-gray-800 text-white p-2 rounded"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
            disabled={!name}
            onClick={handleStart}
          >
            Play Quiz
          </button>
        </div>
      ) : score === null ? (
        <Quiz setScore={setScore} />
      ) : (
        <Result score={score} name={name} />
      )}
    </div>
  );
}

export default App;
