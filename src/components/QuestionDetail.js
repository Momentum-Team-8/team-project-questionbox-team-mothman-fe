import React, { useState, useEffect } from 'react'
import { getQuestionDetail } from '../api'
import '../App.css'

export const QuestionDetail = (props) => {
  const [questionDetail, setQuestionDetail] = useState({})
  const { selectedQuestionId } = props
  useEffect(() => {
    getQuestionDetail(selectedQuestionId).then((data) => {
      setQuestionDetail(data)
    })
  }, [selectedQuestionId])

  return (
    <div key={questionDetail.id}>
      <h2>{questionDetail.title}</h2>
      <p>asked by:{questionDetail.author} on {questionDetail.created_at}</p>
      <p>{questionDetail.body}</p>
      <p> Favorited by {questionDetail.favorited_by} users</p>
      <button>Favorite</button>
    </div>
  )
}
