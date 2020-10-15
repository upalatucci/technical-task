import React from 'react'
import homeIcon from '../assets/images/home-icon.png'
import tvIcon from '../assets/images/tv-icon.png'
import epgIcon from '../assets/images/epg-icon.png'
import replayIcon from '../assets/images/replay-icon.png'
import infoIcon from '../assets/images/info-icon.png'

export default () => (
  <nav>
    <img src={homeIcon} alt="home" />
    <img src={tvIcon} alt="tv" />
    <img src={epgIcon} alt="programs" />
    <img src={replayIcon} alt="replay" />
    <img src={infoIcon} alt="info" />
  </nav>
)