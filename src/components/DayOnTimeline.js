import React, { useRef, useEffect } from 'react'
import { format } from 'date-fns'

export default React.forwardRef(({setSelectedDay, selected, day, id}, ref) => {
  let className = "box box-day"
  if (selected)
    className += " selected"

  const selectDay = e => {
    setSelectedDay(e.currentTarget.id)
  }

  return (
    <div ref={ref} className={className} id={id} onClick={selectDay}>
      {format(day, 'EEE dd.LL.')}
    </div>
  )
})