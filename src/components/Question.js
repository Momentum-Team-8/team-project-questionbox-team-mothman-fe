import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FavButton } from './FavButton.js'
import { Link } from 'react-router-dom'
import '../App.css'

export const Question = (props) => {
  const [favorited, setFavorited] = useState(false)
  const [expand, setExpand] = useState(false)
  const { title, author, created, body, questionId } = props

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleFavorited = () => {
    setFavorited(!favorited)
  }

  return (
    <div className='qCard'>
      <Link to={`/questions/${questionId}`}>
        <h2>{title}</h2>
        <p>{questionId}</p>
      </Link>
      <p>Asked {created} by {author}</p>
      <FavButton onClick={handleFavorited} />
      <button onClick={handleExpand}>
        {expand
          ? <FontAwesomeIcon icon='arrow-alt-circle-up' />
          : <FontAwesomeIcon icon='arrow-alt-circle-down' />}
      </button>
      {expand && (
        <div>
          <p>{body}</p>
        </div>
      )}
    </div>
  )
}
