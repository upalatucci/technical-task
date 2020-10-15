import React from 'react'
import Favorite from './Favorite'
import DaysTimeline from './DaysTimeline'
import Timeline from './Timeline'


export default React.memo(() => (
  <div>
    <div className="flex">
      <Favorite />
      <DaysTimeline />
    </div>
    <Timeline/>
  </div>
))