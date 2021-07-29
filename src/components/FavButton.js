import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FavButton = () => {
  const [heart, setHeart] = useState(false)
  const handleClick = () => {
    setHeart(!heart)
  }
  return (
    <div>
      <button className='qCardButton' onClick={handleClick}>
        {heart
          ? <FontAwesomeIcon icon='heart-broken' />
          : <FontAwesomeIcon icon='heart' />}
      </button>
    </div>
  )
}
