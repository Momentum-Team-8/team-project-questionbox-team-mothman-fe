import React from 'react'
import { Header } from './Header.js'
import { QuestionList } from './QuestionList.js'
import { Search } from './Search.js'

export const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <QuestionList />
    </div>
  )
}
