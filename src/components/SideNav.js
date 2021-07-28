import React from 'react'
import { AskButton } from './AskButton'
import '../App.css'

export const SideNav = () => {
  return (
    <div className='sideNav'>
      <AskButton />
      <p>My QuestionBox</p>
      <p>Questions</p>
      <p>Tags</p>
      <p>Users</p>
    </div>
  )
}
