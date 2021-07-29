import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const history = useHistory()
  const handleSubmit = () => {
    axios
      .post(
        'https://questionbox-sasmothbe.herokuapp.com/api/accounts/signup',
        {
          name: name,
          email: email,
          password: password,
          password2: confirmPassword
        }
      )
      .then(response => {
        history.push('/')
      })
  }
  return (
    <div className='form'>
      <div class='field'>
        <label class='label'>Name</label>
        <div>
          <input class='input' type='text' placeholder='Name input' value={name} onChange={event => setName(event.target.value)} />
          <i class='fas fa-id-badge' />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Email</label>
        <div>
          <input
            class='input'
            type='text'
            placeholder='email input'
            value={email} onChange={event => setEmail(event.target.value)}
          />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Password</label>
        <div>
          <input
            class='input'
            type='password'
            placeholder='password input'
            value={password} onChange={event => setPassword(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label class='label'>Confirm Password</label>
        <div>
          <input
            class='input'
            type='password'
            placeholder='password input'
            value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
