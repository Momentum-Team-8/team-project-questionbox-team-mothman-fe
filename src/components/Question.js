
export const Question = (props) => {
  const [favorited, setFavorited] = useState(false)
  const [expand, setExpand] = useState(false)
  const { title, author, date, body, questionId } = props

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleFavorited = () => {
    setFavorited(!favorited)
  }

  return (
    <div className='qCard'>
      <Link to={`/questions/${questionId}`}>
        <h2>{title}</h2>
        <p>{questionId}</p>
      </Link>
      <p>Asked {date} by {author}</p>
      <FavButton onClick={handleFavorited} />
      <button onClick={handleExpand}>
        {expand
          ? <FontAwesomeIcon icon='arrow-alt-circle-up' />
          : <FontAwesomeIcon icon='arrow-alt-circle-down' />}
      </button>
      {expand && (
        <div>
          <p>{body}</p>
        </div>
      )}
    </div>
  )
}
