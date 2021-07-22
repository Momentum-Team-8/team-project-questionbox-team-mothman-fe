import React from 'react'

export const QuestionDetail = (props) => {
  const { title, author, created, body } = props
  return (
    <div>
      <h2>{title}</h2>
      <p>asked by: {author} on {created}</p>
      <p>{body}</p>
      <button>Favorite</button>
    </div>
  )
}
