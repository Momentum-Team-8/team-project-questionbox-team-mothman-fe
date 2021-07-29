import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

export const EditAnswer = () => {
  const { id } = useParams()
  console.log(id)
  const [editingAns, setEditingAns] = useState('')
  const history = useHistory()

  const handleChange = (event) => {
    setEditingAns(event.target.value)
  }

  const handleSubmit = (event) => {
    axios
      .patch(
        `https://questionbox-sasmothbe.herokuapp.com/api/answers/${id}/edit/`,
        {
          question: `${id}`,
          answer: `${editingAns}`
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
    setEditingAns('')
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Second Thoughts?</h1>
        <div>
          <label>
            Edit Your Response:
            <textarea value={editingAns} onChange={handleChange} />
          </label>
        </div>
        <div>
          <p>{editingAns}</p>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  )
}
