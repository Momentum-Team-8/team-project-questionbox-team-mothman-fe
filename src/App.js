import React from 'react'
import { Header } from './components/Header.js'
import { QuestionList } from './components/QuestionList.js'
import { QuestionDetail } from './components/QuestionDetail.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken, faCheckDouble, faCaretSquareUp, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'
import { SideNav } from './components/SideNav.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
library.add(faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken, faCheckDouble, faCaretSquareUp, faCaretSquareDown)

export const App = (props) => {
  const { selectedQuestionId } = props
  return (
    <Router>
      <div>
        <Header />
        <div className='container'>
          <div className='sideNav'>
            <SideNav />
          </div>
          <div className='body'>
            <Switch>
              <Route path='/' exact component={() => <QuestionList />} />
              <Route path='/questions/:id' component={() => <QuestionDetail selectedQuestionId={selectedQuestionId} />} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
