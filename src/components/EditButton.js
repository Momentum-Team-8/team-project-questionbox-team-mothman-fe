import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const EditButton = () => {
  return (
    <button className='qCardButton'>
      <Link to='/questions/edit'>Edit</Link>
    </button>
  )
}
