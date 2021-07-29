import React, { useState, useEffect } from 'react'
import { useParams , Link } from 'react-router-dom'
import axios from 'axios'


export default function DetailUser () {
  const { id } = useParams()
  const [userProfile, setUserProfile] = useState([])
  useEffect(() => {
    axios
      .get(`http://swordtail.herokuapp.com/users/${id}`)
      .then((data) => {
        setUserProfile(data.data)
      })
  }, [id])

  return (
    <div className='user-profile'>
      <div>
        <h1>{userProfile.username}'s Profile</h1>
      </div>
      {userProfile.questions 
      ? <div>
          <h4 className='user-profile-questions-asked'>Number of Questions asked: {userProfile.questions.length}</h4>
          <h4 className='user-profile-divider'>Number of Answers submitted: {userProfile.answers.length}</h4>
        </div>
        <div className='user-questions'>
          <h3>Questions({userProfile.questions.length})</h3>
                            {userProfile.questions.map((question) => (
                                <li className='li-user-questions' key={question.id}><Link to={`/question/${question.id}`}>{question.title}</Link></li>
                                ))}
                          </div>

          <div className='user-answers'>
                            <h3 className='h3-answers'>Answers({userProfile.answers.length})</h3>
                            {userDetail.answers.map((answer) => (
                                <div>
                                    <li className='userProfile-answer' key={answer.id}>{answer.body}</li>
                                    <div className='userProfile-answer-question'><p>Question: <Link to={`/question/${answer.question}`}>{answer.question_title}</Link></p></div>
                                  </div>
                                ))}
                          </div>
        </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}
