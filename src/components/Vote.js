import React from 'react'
import { UpVote } from './UpVote'
import { DownVote } from './DownVote'

export const Vote = () => {
  return (
    <div>
      <UpVote />
      <p>#</p>
      <DownVote />
    </div>
  )
}
