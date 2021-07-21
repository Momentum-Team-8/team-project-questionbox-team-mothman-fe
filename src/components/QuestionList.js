import React from 'react'
import { Question } from './Question'

export const QuestionList = (props) => {
  const { results } = props
  return (
    <div>
      {results.map((question, idx) => (
        <Question key={idx} question={question} />
      ))}
    </div>
  )
}
