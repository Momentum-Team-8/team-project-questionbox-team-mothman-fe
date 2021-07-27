import React from 'react'
import axios from 'axios'

export const AskQuestion = () => {
  return (
    <div>
      <h2>Ask A Question</h2>
      <label className='label'>Question Title:</label>
      <input
        type='text'
        value='title'
        placeholder='title'
      />
    </div>
  )
}
