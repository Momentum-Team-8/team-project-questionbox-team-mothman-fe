import axios from 'axios'

export const getQuestions = () => {
  return (
    axios
      .get('https://questionbox-sasmothbe.herokuapp.com/api/questions/')
      .then((res) => res.data)
  )
}

export const getQuestionDetail = (id) => {
  return (
    axios
      .get(`https://questionbox-sasmothbe.herokuapp.com/api/questions/${id}/`)
      .then((res) => res.data)
  )
}

export function requestLogin (username, password) {
  return (
    axios
      .post('https://questionbox-sasmothbe.herokuapp.com/auth/token/login',
        {
          email: username,
          password: password
        }
      )
  )
}

export const requestLogout = (isLoggedIn) => {
  return (
    axios
      .post(
        'https://questionbox-sasmothbe.herokuapp.com/auth/token/logout',
        {},
        {
          headers: {
            Authorization: `Token ${isLoggedIn}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => res.data)
  )
}
