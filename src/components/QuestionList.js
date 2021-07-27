import React, { useState, useEffect } from 'react'
import { getQuestions } from '../api'
import { Link } from 'react-router-dom'
import '../App'

export const QuestionList = (props) => {
  const [allQuestions, setAllQuestions] = useState([])
  const { setSelectedQuestionId, loading, setLoading } = props
  useEffect(() => {
    getQuestions().then((data) => setAllQuestions(data))
    setLoading(false)
  }, [setLoading])

  const handleClick = (e) => {
    console.log(e.target.id)
    setSelectedQuestionId(e.target.id)
  }

  return loading
    ? 'loading'
    : (
      <div>
        {allQuestions.map((question, idx) => {
          return (
            <div key={idx} class='QCard'>
              <Link to={`/questions/${question.id}`} onClick={(e) => handleClick(e)}>
                <h3 id={question.id}>{question.title}</h3>
              </Link>
              <p>{question.body}</p>
              <h4> asked by: {question.user} on {question.created_at}</h4>
            </div>
          )
        })}
      </div>
      )
}
