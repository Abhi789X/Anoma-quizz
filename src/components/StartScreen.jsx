import React, { useState } from 'react'

export default function StartScreen({ onStart }) {
  const [name, setName] = useState('')

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4 font-bold">Anoma Quiz</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded text-black"
      />
      <br />
      <button
        onClick={() => name && onStart(name)}
        className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded"
      >
        Play Quiz
      </button>
    </div>
  )
}
