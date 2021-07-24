import React from 'react'
import { Vote } from './Vote'
import '../App.css'

export const Answer = (props) => {
  const { author, body, date, accepted } = props

  return (
    <div className='aCard'>
      {accepted
        ? <div className='acceptedAnswer'>
          <Vote />
          <p>{body}</p>
          <p>Answered on {date} by {author}</p>
          </div>
        : <div className='regAnswer'>
          <Vote />
          <p>{body}</p>
          <p> Answered on {date} by {author}</p>
          </div>}
    </div>
  )
}
