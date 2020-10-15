import React, { useEffect, useState } from 'react'
import { getJsonData } from '../api'
import Program from './Program'


export default React.memo(() => {
  const [channels, setChannels] = useState([])
  const hours = new Array(24).fill(0).map((v, i) => {
    const h = i < 10 ? `0${i}`: i.toString()
    return `${h}:00`
  })


  useEffect(() => {
    getJsonData("epg")
    .then(response => setChannels(response.channels))
  }, [])

  return (
    <div className="border-top timeline-container">
      <div className="channels right-shadow">
        {channels.map(c => (
          <div className="box custom-box box-channel border-bottom" key={c.id}>
            <img src={c.images.logo} alt={c.title} />
          </div>
        ))}
      </div>
      <div className="timeline-channels" style={{height: `calc(${channels.length} * var(--box-size)`}}>
        <div className="timeline-time">
          {hours.map(h => (
            <div key={h} className="timeline-hour">
              {h}
            </div>
          ))}
        </div>
        {channels.map(c => (
          <div key={c.id} className="box timeline-channel border-bottom">
            {c.schedules.map((s, i) => (
              <Program key={i} {...s} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
})