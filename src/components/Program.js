import React from 'react'
import { format } from 'date-fns'
import { HOUR_MILLISECONDS } from '../constants'

export default React.memo(({title, start, end}) => {

  const startDate = new Date(start)
  const endDate = new Date(end)

  const hourFraction = ( endDate.getTime() - startDate.getTime()  ) / HOUR_MILLISECONDS

  const now = new Date()
  const live = startDate < now && now < endDate 
  return (
    <div 
      className={"box program-box " + (live ? 'live' : '')} 
      style={{minWidth: `calc(${Math.round(hourFraction * 10000) / 10000} * var(--hour-timeline-width))`}}
    >
      <h3>{title}</h3>
      <p>{format(startDate, 'HH:mm')} - {format(endDate, 'HH:mm')}</p>
    </div>
  )
})