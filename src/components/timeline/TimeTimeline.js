import React from 'react'

export default React.memo(() => {
  const hours = new Array(24).fill(0).map((v, i) => {
    const h = i < 10 ? `0${i}`: i.toString()
    return `${h}:00`
  })
  
  return (
    <div className="timeline-time">
      {hours.map(h => (
        <div key={h} className="timeline-hour">
          <div className="hour-line"></div>
          {h}
        </div>
      ))}
    </div>
  )
})