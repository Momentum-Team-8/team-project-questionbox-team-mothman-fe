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

export function requestLogin (email, password) {
  return (
    axios
      .post('https://questionbox-sasmothbe.herokuapp.com/auth/token/login',
        {
          email: email,
          password: password
        }
      )
  )
}
