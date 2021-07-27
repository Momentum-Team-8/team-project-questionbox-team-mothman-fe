import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const url = 'https://questionbox-sasmothbe.herokuapp.com/api/accounts/signup'
  const history = useHistory()
  const handleSubmit = () => {
    axios.post(url, {
      name: name,
      email: email,
      password: password,
      password2: confirmPassword
    }).then(response => {
      console.log(response)
      history.push('/')
    })
  }
  return (
    <div>
      <div class='field'>
        <label class='label'>Name</label>
        <div class='control'>
          <input class='input' type='text' placeholder='Name input' value={name} onChange={event => setName(event.target.value)} />
          <i class='fas fa-id-badge' />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Email</label>
        <div class='control has-icons-left has-icons-right'>
          <input
            class='input'
            type='text'
            placeholder='email input'
            value={email} onChange={event => setEmail(event.target.value)}
          />
          <span class='icon is-small is-left'>
            <i class='fas fa-user-tag' />
          </span>
          <span class='icon is-small is-right' />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Password</label>
        <div class='control has-icons-left has-icons-right'>
          <input
            class='input'
            type='password'
            placeholder='password input'
            value={password} onChange={event => setPassword(event.target.value)}
          />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Confirm Password</label>
        <div class='control has-icons-left has-icons-right'>
          <input
            class='input'
            type='password'
            placeholder='password input'
            value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}
          />
        </div>
      </div>
      <div class='field is-grouped'>
        <div class='control'>
          <button class='button is-link' onClick={handleSubmit}>Submit</button>
        </div>
        <div class='control'>
          <Link to='/'>
            <button class='button is-link is-light'>Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
