

export const Answer = (props) => {
  const { author, body, date } = props

  return (
    <div className='aCard'>
      <Vote />
      <p>{body}</p>
      <p> Answered on {date} by {author}</p>
    </div>
  )
}

{ /* <div className='aCard'>
      {accepted
        ? <div className='acceptedAnswer'>
          <Vote />
          <p>{body}</p>
          <p>Answered on {date} by {author}</p>
          </div>
        : <div className='regAnswer'>
          <Vote />
          <p>{body}</p>
          <p> Answered on {date} by {author}</p>
          </div>}
    </div>
  ) */ }



  <div>
  {questionDetail.answers.map((answer, idx) => {
    return (
      <div key={idx}>
        <div className='aCard'>
          <Vote />
          <p>{answer.body}</p>
          <p> Answered on {answer.created_at} by {answer.user}</p>
        </div>
      </div>
    )
  })}
</div>