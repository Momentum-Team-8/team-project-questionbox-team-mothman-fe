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
                <h2 id={question.id}>{question.title}</h2>
              </Link>
              <h4 className='italics'> asked by: {question.user} on {question.created_at}</h4>
              <div className='buttons'>
                <FavButton onClick={handleFavorited} />
                <button className='qCardButton' onClick={handleExpand}>
                  {expand
                    ? <FontAwesomeIcon icon='arrow-alt-circle-up' />
                    : <FontAwesomeIcon icon='arrow-alt-circle-down' />}
                </button>
              </div>
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
