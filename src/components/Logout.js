import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export const Logout = ({ isLoggedIn, setAuth }) => {
  axios
    .post(
      'https://questionbox-sasmothbe.herokuapp.com/auth/token/logout',
      {},
      {
        headers: {
          Authorization: `Token ${isLoggedIn}`,
          'Content-Type': 'application/json'
        }
      }
    )
    .then(() => {
      setAuth(null)
    })

  return (
    <>
      <p>You are now logged out</p>
      <Link to='/'>Go Back to Questions</Link>
    </>
  )
}
