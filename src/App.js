import React from 'react'
import { Header } from './components/Header.js'
import { QuestionList } from './components/QuestionList.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken)

export const App = () => {
  return (
    <div>
      <Header />
      <QuestionList />
    </div>
  )
}
