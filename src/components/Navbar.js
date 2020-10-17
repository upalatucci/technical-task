import React from 'react';
import homeIcon from '../assets/images/home-icon.png';
import tvIcon from '../assets/images/tv-icon.png';
import epgIcon from '../assets/images/epg-icon.png';
import replayIcon from '../assets/images/replay-icon.png';
import infoIcon from '../assets/images/info-icon.png';

export default () => (
  <nav>
    <div>
      <img src={homeIcon} alt="home" />
      <span>Home</span>
    </div>
    <div>
      <img src={tvIcon} alt="tv" />
      <span>TV</span>
    </div>
    <div>
      <img src={epgIcon} alt="programs" />
      <span>EPG</span>
    </div>
    <div>
      <img src={replayIcon} alt="replay" />
      <span>Replay</span>
    </div>
    <div>
      <img src={infoIcon} alt="info" />
      <span>Info</span>
    </div>
  </nav>
);
