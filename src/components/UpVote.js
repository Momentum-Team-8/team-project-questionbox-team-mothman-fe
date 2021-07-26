import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const UpVote = () => {
  const [heart, setHeart] = useState(false)
  const handleClick = () => {
    // add to answer count
  }
  return (
    <div>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon='caret-square-up' />
      </button>
    </div>
  )
}
