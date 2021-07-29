import React, { useState } from 'react'
import { Header } from './components/Header.js'
import { QuestionList } from './components/QuestionList.js'
import { QuestionDetail } from './components/QuestionDetail.js'
import { AskQuestion } from './components/AskQuestion'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { useLocalStorageState } from 'use-local-storage-state'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken, faCheckDouble, faCaretSquareUp, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'
import { SideNav } from './components/SideNav.js'
import { Registration } from './components/Registration'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { EditAnswer } from './components/EditAnswer.js'
library.add(faCheckSquare, faArrowAltCircleDown, faArrowAltCircleUp, faHeart, faHeartBroken, faCheckDouble, faCaretSquareUp, faCaretSquareDown)

export const App = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState('')
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useLocalStorageState('token', '')
  // const isLoggedIn = token
  // const setAuth = (token) => {
  // setToken(token)
  // }
  return (
    <Router>
      <div>
        <Header token={token} setToken={setToken} />
        <div className='container'>
          <div className='sideNav'>
            <SideNav />
          </div>
          <div className='body'>
            <Switch>
              <Route
                exact
                path='/'
                component={() => (
                  <QuestionList
                    setSelectedQuestionId={setSelectedQuestionId}
                    loading={loading}
                    setLoading={setLoading}
                    token={token}
                  />
                )}
              />
              <Route
                path='/registration'
                component={Registration}
              />
              <Route
                exact
                path='/login'
                component={() => (
                  <Login token={token} setToken={setToken} />
                )}
              />
              <Route
                exact path='/logout'
                component={() => (
                  <Logout token={token} setToken={setToken} />
                )}
              />
              <Route
                exact path='/questions/ask'
                component={() => (
                  <AskQuestion
                    token={token}
                  />
                )}
              />
              <Route
                exact path='/answers/edit/:id'
                component={EditAnswer}
                token={token}
              />
              <Route
                path='/details/:id'
                component={() => (
                  <QuestionDetail
                    selectedQuestionId={selectedQuestionId}
                    loading={loading}
                    setLoading={setLoading}
                    token={token}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
