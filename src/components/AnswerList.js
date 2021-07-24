import React, { useState } from 'react'
import { data } from '../MockData.js'
import { Answer } from './Answer'

export const AnswerList = () => {
  const [answers] = useState(data)
  return (
    <div>
      {answers.map((answer, idx) => (
        <div key={idx}>
          <Answer
            body={answer.body}
            author={answer.author}
            date={answer.date}
            accepted={answer.accepted}
            votes={answer.Votes}
          />
        </div>
      ))}
    </div>
  )
}
