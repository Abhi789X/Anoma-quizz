import { useState, useEffect } from "react";
import { questions } from "./data";

function Quiz({ setScore }) {
  const [qns, setQns] = useState([]);
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQns(shuffled.slice(0, 5));
  }, []);

  const handleAnswer = (option) => {
    if (option === qns[current].answer) setCorrect((c) => c + 1);
    if (current === 4) setScore(correct + (option === qns[current].answer ? 1 : 0));
    else setCurrent((i) => i + 1);
  };

  if (!qns.length) return null;

  return (
    <div className="text-center p-4">
      <h2 className="text-xl mb-4">{qns[current].question}</h2>
      {qns[current].options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleAnswer(opt)}
          className="block bg-gray-800 hover:bg-purple-700 rounded px-4 py-2 my-2 w-full max-w-md mx-auto"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
