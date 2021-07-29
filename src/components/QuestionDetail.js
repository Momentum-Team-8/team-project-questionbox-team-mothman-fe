import React, { useState, useEffect } from 'react'
import { getQuestionDetail } from '../api'
import { FavButton } from './FavButton'
import '../App.css'
import { AddAnswer } from './AddAnswer'
import { EditButton } from './EditButton'
import { DeleteButton } from './DeleteButton'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios'

export const QuestionDetail = (props) => {
  const { token } = props
  const [questionDetail, setQuestionDetail] = useState([])
  const [expand, setExpand] = useState(false)
  const [selectedAnswerId, setSelectedAnswerId] = useState('')
  const { id } = useParams()
  useEffect(() => {
    getQuestionDetail(id).then((data) => {
      setQuestionDetail(data)
    })
  }, [questionDetail, id])

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleClick = (e) => {
    setSelectedAnswerId(e.target.id)
    console.log(selectedAnswerId)
  }

  const handleDelete = () => {
    axios
      .delete(
        `https://questionbox-sasmothbe.herokuapp.com/api/questions/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
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
        <DeleteButton onClick={handleDelete} />
        <button className='qCardButton' onClick={handleExpand}>Respond</button>
        {expand && (
          <div>
            <AddAnswer />
          </div>
        )}
      </div>

      <h3>Community Answers</h3>
      {questionDetail.answers && questionDetail.answers.map((answer) => {
        return (
          <div key={answer.id}>
            <div className='aCard'>
              <p>this is the answer body: {answer.answer}</p>
              <p> Answered on {answer.created_at} by {answer.user}</p>
            </div>
            <p>this is the answer ID: {answer.id}</p>
            <Link to={`/answers/edit/${answer.id}`} onClick={(e) => handleClick(e)}>
              <button>Edit This Answer</button>
            </Link>
          </div>
        )
      })}
    </>
  )
}
