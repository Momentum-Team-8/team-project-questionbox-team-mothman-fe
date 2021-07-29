import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const DeleteButton = () => {
  return (
    <button className='qCardButton'>
      <Link to='/questions/delete'>Delete</Link>
    </button>
  )
}
