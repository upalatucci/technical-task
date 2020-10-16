import React from 'react'
import Favorite from './Favorite'
import DaysTimeline from './DaysTimeline'
import Timeline from './Timeline'

export default () => {
  return (
    <div>
      <div className="flex">
        <Favorite />
        <DaysTimeline />
      </div>
      <Timeline />
    </div>
  )
}