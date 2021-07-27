import React from 'react'
import { Link } from 'react-router-dom'

export const AskButton = () => {
  return (
    <button className='askButton'>
      <Link to='/questions/ask'>Ask A Question</Link>
    </button>
  )
}
