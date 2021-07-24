import React from 'react'
import { Header } from './components/Header.js'
import { QuestionList } from './components/QuestionList.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { SideNav } from './components/SideNav.js'
library.add(faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken)

export const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='sideNav'>
          <SideNav />
        </div>
        <div className='body'>
          <QuestionList />
        </div>
      </div>
    </div>
  )
}
