import React, { useState, useEffect } from 'react'

export default function QuizScreen({ questions, onFinish }) {
  const [shuffled, setShuffled] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const selected = [...questions].sort(() => 0.5 - Math.random()).slice(0, 5)
    setShuffled(selected)
  }, [])

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    const next = index + 1
    if (next < shuffled.length) {
      setIndex(next)
    } else {
      onFinish(score + (isCorrect ? 1 : 0))
    }
  }

  if (!shuffled.length) return <div>Loading...</div>

  const q = shuffled[index]

  return (
    <div className="max-w-xl w-full">
      <h2 className="text-xl mb-4">{q.question}</h2>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt === q.answer)}
            className="block w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
