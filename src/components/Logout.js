import { requestLogout } from '../api'
import { Redirect } from 'react-router-dom'

export const Logout = ({ isLoggedIn }) => {
  requestLogout(isLoggedIn)
  return (
    <Redirect to='/' />
  )
}
