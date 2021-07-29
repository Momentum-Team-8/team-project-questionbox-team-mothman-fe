import React, { useState, useEffect } from 'react'
import { getQuestionDetail } from '../api'
import { FavButton } from './FavButton'
import '../App.css'
import { AddAnswer } from './AddAnswer'
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
    <div className='box'>
      <div className='qCard' key={questionDetail.id}>
        <h2 className='detailHeader'>{questionDetail.title}</h2>
        <p>{questionDetail.body}</p>
        <p className='italics'> asked by:{questionDetail.user} on {questionDetail.created_at}</p>
        <p className='italics'> Favorited by {questionDetail.favorited_by} users</p>
        <div className='buttons'>
          <DeleteButton onClick={handleDelete} />
          <button className='qCardButton' onClick={handleExpand}>Respond</button>
          {expand && (
            <div>
              <AddAnswer token={token} />
            </div>
          )}
          <FavButton />
        </div>
      </div>

      <h3 className='detailHeader'>Community Answers</h3>
      {questionDetail.answers && questionDetail.answers.map((answer) => {
        return (
          <div key={answer.id} className='ansCard'>
            <p>{answer.answer}</p>
            <br />
            <p className='italics'> Answered on {answer.created_at} by {answer.user}</p>
            <Link to={`/answers/edit/${answer.id}`} onClick={(e) => handleClick(e)}>
              <button className='ansCardButton'>Edit This Answer</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
