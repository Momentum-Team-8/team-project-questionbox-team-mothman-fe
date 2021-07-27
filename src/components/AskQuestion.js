import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export const AskQuestion = () => {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    axios
      .post(
        'https://questionbox-sasmothbe.herokuapp.com/api/questions/create/',
        {
          title: title,
          body: body
        },
        {
          headers: {
            Authorization: 'Token fe4ba9290bbdc508c1bd0369584bc981dbca214e',
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        console.log(res)
        history.push('/')
      })
    event.preventDefault()
    setBody('')
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Question Form</h1>
        <label>
          Question Title:
          <input
            placeholder='Title'
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <div>
          <label>Ask:</label>
          <div>
            <textarea
              class='textarea'
              placeholder='Type Question Here'
              onChange={(event) => setBody(event.target.value)}
            />
            <p>{body}</p>
          </div>
          <div>
            <div>
              <button type='submit' value='Submit'>
                Submit
              </button>
            </div>
            <div>
              <Link to='/'>
                <button>Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
