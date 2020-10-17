import React, { useEffect, useRef, useState } from 'react';
import getJsonData from '../../api';
import Program from './Program';
import ChannelsImages from './ChannelsImages';
import TimeTimeline from './TimeTimeline';
import { REFRESH_NOWLINE_MILLISECONDS } from '../../constants';
import { scrollTo } from '../../utils';
import Spinner from '../Spinner';

export default () => {
  const nowRef = useRef();
  const nowButtonRef = useRef();
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  const [nowLineLeftProperty, setNowLineLeftProperty] = useState(null);

  const computeNowLineLeft = () => {
    const now = new Date();
    const hours = now.getHours() + (now.getMinutes() * 100) / (60 * 100);
    setNowLineLeftProperty(`calc(${Math.round(hours * 100) / 100} * var(--hour-timeline-width))`);
  };

  const setUpIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      const nowLine = entries[0];
      if (!nowLine.isIntersecting) {
        nowButtonRef.current.classList.add('show');
      } else {
        nowButtonRef.current.classList.remove('show');
      }
    });

    observer.observe(nowRef.current);
  };

  const scrollToNowLine = (smooth = true) => {
    if (nowRef && nowRef.current) {
      const leftNowLine = parseInt(getComputedStyle(nowRef.current).left, 10);

      scrollTo(
        nowRef.current.parentElement,
        leftNowLine - window.innerWidth / 4,
        0,
        smooth,
      );
    }
  };

  useEffect(() => {
    computeNowLineLeft();

    getJsonData('epg')
      .then((response) => setChannels(response.channels))
      .finally(() => setTimeout(() => setLoading(false), 1500)); // see animation

    setInterval(computeNowLineLeft, REFRESH_NOWLINE_MILLISECONDS);
    setUpIntersectionObserver();
  }, []);

  useEffect(() => {
    setTimeout(() => scrollToNowLine(false), 500);
  }, [channels]);

  return (
    <div className="border-top timeline-container">
      {loading && <Spinner />}
      <button type="button" className="now-button" onClick={scrollToNowLine} ref={nowButtonRef}>Now</button>

      <ChannelsImages channels={channels} />
      <div className="timeline-channels" style={{ height: `calc(${channels.length} * var(--box-size) + var(--box-size) / 2` }}>
        <div className="now-line" style={{ left: nowLineLeftProperty }} ref={nowRef}>
          <div className="now-line-notch" />
        </div>

        <TimeTimeline />
        {channels.map((c) => (
          <div key={c.id} className="box timeline-channel">
            {c.schedules.map((s) => (
              <Program
                key={s.start}
                title={s.title}
                start={s.start}
                end={s.end}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
