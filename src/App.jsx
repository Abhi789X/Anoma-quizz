import React, { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import { questions } from './data/questions'

export default function App() {
  const [username, setUsername] = useState('')
  const [stage, setStage] = useState('start')
  const [score, setScore] = useState(0)

  const handleStart = (name) => {
    setUsername(name)
    setStage('quiz')
  }

  const handleFinish = (finalScore) => {
    setScore(finalScore)
    setStage('result')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {stage === 'start' && <StartScreen onStart={handleStart} />}
      {stage === 'quiz' && <QuizScreen questions={questions} onFinish={handleFinish} />}
      {stage === 'result' && <ResultScreen username={username} score={score} />}
    </div>
  )
}
