import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

export const AddAnswer = (props) => {
  const { id } = useParams()
  console.log({ id })
  const [answer, setAnswer] = useState('')
  const history = useHistory()

  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  const handleSubmit = (event) => {
    axios
      .post(
        'https://questionbox-sasmothbe.herokuapp.com/api/answers/create/',
        {
          question: `${id}`,
          answer: `${answer}`
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
        history.push(`/details/${id}`)
      })
    event.preventDefault()
    setAnswer('')
  }
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>What do you think about this?</h1>
        <div>
          <label>
            Your Response:
            <textarea value={answer} onChange={handleChange} />
          </label>
        </div>
        <div>
          <p>{answer}</p>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  )
}
