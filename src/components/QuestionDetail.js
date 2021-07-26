import React, { useState, useEffect } from 'react'
import { getQuestionDetail } from '../api'
import '../App.css'

export const QuestionDetail = (props) => {
  const { questionId } = props
  const [questionDetail, setQuestionDetail] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log(questionId)
    getQuestionDetail(questionId).then((data) => {
      setQuestionDetail(data)
      setLoading(false)
    })
  }, [questionId])

  return (
    <>
      {loading
        ? 'loading'
        : <div>
          <h2>{questionDetail.title}</h2>
          <p>asked by:{questionDetail.author} on {questionDetail.created_at}</p>
          <p>{questionDetail.body}</p>
          <p> Favorited by {questionDetail.favorited_by} users</p>
          <button>Favorite</button>
          </div>}
    </>
  )
}
