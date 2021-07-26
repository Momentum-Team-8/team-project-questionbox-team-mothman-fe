import React, { useState, useEffect } from 'react'
import { getQuestions } from '../api'
import { Question } from './Question.js'
import '../App'

export const QuestionList = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(data)
    })
  }, [])

  return (
    <div>
      {questions.map((question, idx) => (
        <div key={idx}>
          <Question
            title={question.title}
            author={question.author}
            created={question.created_at}
            body={question.body}
            selectedQuestionId={question.id}
          />
        </div>
      ))}
    </div>
  )
}
