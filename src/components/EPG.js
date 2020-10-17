import React from 'react';
import Favorite from './Favorite';
import DaysTimeline from './DaysTimeline';
import Timeline from './timeline/Timeline';

export default () => (
  <div>
    <div className="flex">
      <Favorite />
      <DaysTimeline />
    </div>
    <Timeline />
  </div>
);
