import React, { useState } from 'react'
import { Header } from './components/Header.js'
import { QuestionList } from './components/QuestionList.js'
import { QuestionDetail } from './components/QuestionDetail.js'
import { AskQuestion } from './components/AskQuestion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken, faCheckDouble, faCaretSquareUp, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'
import { SideNav } from './components/SideNav.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
library.add(faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken, faCheckDouble, faCaretSquareUp, faCaretSquareDown)

export const App = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState('')
  const [loading, setLoading] = useState(true)
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
              <Route
                exact path='/'
                component={() => (
                  <QuestionList
                    setSelectedQuestionId={setSelectedQuestionId}
                    loading={loading}
                    setLoading={setLoading}
                  />
                )}
              />
              <Route
                path='/details/:id'
                component={() => (
                  <QuestionDetail
                    selectedQuestionId={selectedQuestionId}
                    loading={loading}
                    setLoading={setLoading}
                  />
                )}
              />
              <Route
                exact path='/questions/ask'
                component={AskQuestion}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
