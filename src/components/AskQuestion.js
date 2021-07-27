import React, { useState } from 'react'

export const QuestionForm = () => {
  const [question, setQuestion] = useState('')
  const handleChange = (event) => {
    setQuestion(event.target.value)
  }
  return (
    <div>
      <form>
        <h1>What's your Question</h1>
        <label>
          Type Question Title:
          <input type='text' value={question} onChange={handleChange} />
        </label>
        Type Question Body: <textarea>Hello there, this is some text in a text area</textarea>
        <p>{question}</p>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
