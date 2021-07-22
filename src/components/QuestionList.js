import React, { useState } from 'react'
import { data } from '../MockData.js'
import { Question } from './Question.js'

export const QuestionList = () => {
  const [questions] = useState(data)
  return (
    <div>
      {questions.map((question, idx) => (
        <div key={idx}>
          <Question question={question.title} />
        </div>
      ))}
    </div>
  )
}
