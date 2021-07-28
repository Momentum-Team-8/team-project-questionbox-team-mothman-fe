import React, { useState, useEffect } from 'react'
import { getQuestionDetail } from '../api'
import { FavButton } from './FavButton'
import { Vote } from './Vote'
import '../App.css'
import { AddAnswer } from './AddAnswer'
import { EditButton } from './EditButton'
import { DeleteButton } from './DeleteButton'
import { useParams } from 'react-router'

export const QuestionDetail = () => {
  const [questionDetail, setQuestionDetail] = useState([])
  const [expand, setExpand] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    getQuestionDetail(id).then((data) => {
      setQuestionDetail(data)
    })
  }, [questionDetail, id])

  const handleExpand = () => {
    setExpand(!expand)
  }

  return (
    <>
      <div className='qCard' key={questionDetail.id}>
        <h2>{questionDetail.title}</h2>
        <p>asked by:{questionDetail.author} on {questionDetail.created_at}</p>
        <p>{questionDetail.body}</p>
        <p> Favorited by {questionDetail.favorited_by} users</p>
        <FavButton />
        <EditButton />
        <DeleteButton />
        <button className='qCardButton' onClick={handleExpand}>Respond</button>
        {expand && (
          <div>
            <AddAnswer />
          </div>
        )}
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
