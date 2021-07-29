import axios from 'axios'
import { Link } from 'react-router-dom'

export const Logout = ({ token, setToken }) => {
  axios
    .post(
      'https://questionbox-sasmothbe.herokuapp.com/auth/token/logout',
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    .then(() => {
      setToken(null)
    })

  return (
    <>
      <p>You are now logged out</p>
      <Link to='/'>Go Back to Questions</Link>
    </>
  )
}
