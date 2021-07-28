import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='nav'>
      <Link to='/'>
        <h1> Welcome to Question Box</h1>
      </Link>
      <label for='searchbox'>Search QuestionBox:</label>
      <input type='search' id='searchbox' name='searchbox' />
      <br />
    </div>
  )
}
