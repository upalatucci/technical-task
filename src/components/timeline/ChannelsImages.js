import React from 'react'

export default React.memo(({channels}) => (
  <div className="channels">
    <div className="timeline-time border-bottom right-shadow"></div>
    {channels.map(c => (
      <div className="box custom-box box-channel border-bottom right-shadow" key={c.id}>
        <img src={c.images.logo} alt={c.title} />
      </div>
    ))}
  </div>
))