import axios from 'axios'

export const getQuestions = () => {
  return (
    axios
      .get('https://questionbox-sasmothbe.herokuapp.com/api/questions/')
      .then(res => res.data)
  )
}

export const getQuestionDetail = (id) => {
  return (
    axios
      .get(`https://questionbox-sasmothbe.herokuapp.com/api/questions/${id}/`)
      .then(res => res.data)
  )
}
