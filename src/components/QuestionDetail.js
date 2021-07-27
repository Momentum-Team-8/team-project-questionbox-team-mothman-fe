import React, { useState, useEffect } from 'react'
import { getQuestionDetail } from '../api'
import { FavButton } from './FavButton'
import { Vote } from './Vote'
import '../App.css'

export const QuestionDetail = (props, { match }) => {
  const [questionDetail, setQuestionDetail] = useState([])
  const { selectedQuestionId } = props
  useEffect(() => {
    getQuestionDetail(selectedQuestionId).then((data) => {
      setQuestionDetail(data)
    })
  }, [selectedQuestionId])

  return (
    <>
      <div className='qCard' key={questionDetail.id}>
        <h2>{questionDetail.title}</h2>
        <p>asked by:{questionDetail.author} on {questionDetail.created_at}</p>
        <p>{questionDetail.body}</p>
        <p> Favorited by {questionDetail.favorited_by} users</p>
        <FavButton />
      </div>

      <p>Answer List Here</p>
      {questionDetail.answers && questionDetail.answers.map((answer, idx) => {
        return (
          <div key={idx}>
            <div className='aCard'>
              <Vote />
              <p>{answer.answer}</p>
              <p> Answered on {answer.created_at} by {answer.user}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
