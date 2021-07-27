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




---------
<div>
        {questionDetail.answers.map((answer, idx) => {
          return (
            <div key={idx}>
              <div className='regAnswer'>
                <Vote />
                <p>{answer.answer}</p>
                <p> Answered on {answer.created_at} by {answer.user}</p>
              </div>
            </div>
          )
        })}
      </div>