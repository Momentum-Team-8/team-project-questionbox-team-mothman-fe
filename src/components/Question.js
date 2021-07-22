import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { QuestionDetail } from './QuestionDetail'

export const Question = (props) => {
  const [expand, setExpand] = useState(false)
  const { title, author, created, body } = props

  const handleExpand = () => {
    setExpand(!expand)
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleExpand}>
        {expand
          ? <FontAwesomeIcon icon='arrow-alt-circle-up' />
          : <FontAwesomeIcon icon='arrow-alt-circle-down' />}
      </button>
      {expand && (
        <div>
          <QuestionDetail
            title={title}
            author={author}
            created={created}
            body={body}
          />
        </div>
      )}
    </div>
  )
}
