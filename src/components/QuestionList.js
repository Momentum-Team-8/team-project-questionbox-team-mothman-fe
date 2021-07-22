import React, { useState } from 'react'
import { data } from '../MockData.js'
import { Question } from './Question.js'

export const QuestionList = () => {
  const [questions] = useState(data)
  return (
    <div>
      {questions.map((question, idx) => (
        <div key={idx}>
          <Question
            title={question.title}
            author={question.author}
            created={question.created_at}
            body={question.body}
          />
        </div>
      ))}
    </div>
  )
}
