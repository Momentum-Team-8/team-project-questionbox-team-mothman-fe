import { useState } from 'react'
import { requestLogin } from '../api'
import { useHistory } from 'react-router-dom'

export function Login ({ token, setToken }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    requestLogin(email, password)
      .then((data) => {
        if (data) {
          setToken(data.data.auth_token)
          console.log(data)
        }
      })
      .catch((error) => {
        setErrors(error.message)
      })
      .then(() => history.push('/'))
  }

  return (
    <div className='Login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {errors && <div>{errors}</div>}

        <div>
          <label htmlFor='username'>
            Email:
          </label>
          <input
            type='text'
            id='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}
