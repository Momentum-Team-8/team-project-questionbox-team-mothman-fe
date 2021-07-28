import React, { useState, useEffect } from 'react'
import { getQuestions } from '../api'
import { Link } from 'react-router-dom'
import { FavButton } from './FavButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App'

export const QuestionList = (props) => {
  const [allQuestions, setAllQuestions] = useState([])
  const [expand, setExpand] = useState(false)
  const [favorited, setFavorited] = useState(false)
  const { setSelectedQuestionId, loading, setLoading } = props
  useEffect(() => {
    getQuestions().then((data) => setAllQuestions(data))
    setLoading(false)
  }, [setLoading])

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleFavorited = () => {
    setFavorited(!favorited)
  }

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
            <div key={idx} class='qCard'>
              <Link to={`/details/${question.id}`} onClick={(e) => handleClick(e)}>
                <h3 id={question.id}>{question.title}</h3>
              </Link>
              <h4> asked by: {question.user} on {question.created_at}</h4>
              <FavButton onClick={handleFavorited} />
              <button onClick={handleExpand}>
                {expand
                  ? <FontAwesomeIcon icon='arrow-alt-circle-up' />
                  : <FontAwesomeIcon icon='arrow-alt-circle-down' />}
              </button>
              {expand && (
                <div>
                  {question.body}
                </div>
              )}
            </div>
          )
        })}
      </div>
      )
}
