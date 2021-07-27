import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DownVote = () => {
  const handleClick = () => {
    // subtract from answer count
  }
  return (
    <div>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon='caret-square-down' />
      </button>
    </div>
  )
}
