import React from 'react'

export const Header = () => {
  return (
    <div>
      <h1> Welcome to Question Box</h1>
      <label for='searchbox'>Search QuestionBox:</label>
      <input type='search' id='searchbox' name='searchbox' />
      <br />
      <button>Ask A Question</button>
    </div>
  )
}
