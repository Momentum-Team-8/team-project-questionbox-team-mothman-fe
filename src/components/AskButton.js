import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const AskButton = () => {
  return (
    <button className='askButton'>
      <Link to='/questions/ask'>Ask</Link>
    </button>
  )
}
