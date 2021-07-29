import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  const { token } = props
  return (
    <div className='nav'>
      <Link to='/'>
        <h1> Welcome to Question Box</h1>
      </Link>
      <label for='searchbox'>Search QuestionBox:</label>
      <input type='search' id='searchbox' name='searchbox' />
      <br />
      {token
        ? <>
          <Link to='/logout'><p>Log out</p></Link>
          </>
        : <>
          <Link to='/login'><p>Login</p></Link>
          <Link to='/registration'><p>Sign Up</p></Link>
          </>}
    </div>
  )
}
