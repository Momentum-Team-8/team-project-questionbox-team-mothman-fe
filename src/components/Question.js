import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { QuestionDetail } from './QuestionDetail.js'
import { FavButton } from './FavButton.js'
import '../App.css'

export const Question = (props) => {
  const [favorited, setFavorited] = useState(false)
  const [expand, setExpand] = useState(false)
  const { title, author, created, body } = props

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleFavorited = () => {
    setFavorited(!favorited)
  }

  return (
    <div className='qCard'>
      <h2>{title}</h2>
      <p>Asked {created} by {author}</p>
      <FavButton onClick={handleFavorited} />
      <button onClick={handleExpand}>
        {expand
          ? <FontAwesomeIcon icon='arrow-alt-circle-up' />
          : <FontAwesomeIcon icon='arrow-alt-circle-down' />}
      </button>
      {expand && (
        <div>
          <QuestionDetail
            body={body}
          />
        </div>
      )}
    </div>
  )
}
