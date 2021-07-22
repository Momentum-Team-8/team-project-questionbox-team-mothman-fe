import React from 'react'

export const Question = (props) => {
  const { question } = props

  return (
    <div>
      <h2>{question}</h2>
      <button>See More</button>
    </div>
  )
}
