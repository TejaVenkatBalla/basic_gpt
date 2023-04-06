import React, { useState } from 'react'

const App2 = () => {
  const [inputText, setInputText] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:3080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: inputText })
    })
    const data = await response.json()
    setResponse(data.message)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <textarea value={inputText} onChange={(event) => setInputText(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Response: {response}</p>
    </div>
  )
}

export default App2;
