import React from 'react'
import { Link } from 'react-router-dom'

export const Registration = () => {
  return (
    <div>
      <div class='field'>
        <label class='label'>Name</label>
        <div class='control'>
          <input class='input' type='text' placeholder='Name input' />
          <i class='fas fa-id-badge' />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Username</label>
        <div class='control has-icons-left has-icons-right'>
          <input
            class='input'
            type='text'
            placeholder='Username input'
            value=''
          />
          <span class='icon is-small is-left'>
            <i class='fas fa-user-tag' />
          </span>
          <span class='icon is-small is-right' />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Email</label>
        <div class='control has-icons-left has-icons-right'>
          <input
            class='input'
            type='email'
            placeholder='Email input'
            value=''
          />
          <span class='icon is-small is-left'>
            <i class='fas fa-envelope' />
          </span>
          <span class='icon is-small is-right' />
        </div>
      </div>
      <div class='field is-grouped'>
        <div class='control'>
          <button class='button is-link'>Submit</button>
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
