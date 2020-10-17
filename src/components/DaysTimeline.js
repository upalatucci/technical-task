import React, { useState, useRef, useEffect } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { DATE_FORMAT } from '../constants';
import DayOnTimeline from './DayOnTimeline';

export default () => {
  const ref = useRef(null);
  const [selectedDay, setSelectedDay] = useState(format(new Date(), DATE_FORMAT));
  const startDay = subDays(new Date(), 7);
  const days = new Array(14).fill(0).map((_, i) => addDays(startDay, i));

  useEffect(() => {
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.scrollIntoView();
      }
    }, 500);
  }, []);

  return (
    <div className="box box-daytimeline">
      {days.map((day) => {
        let selected = false;
        const formattedDay = format(day, DATE_FORMAT);

        if (selectedDay === formattedDay) selected = true;

        return (
          <DayOnTimeline
            key={day}
            ref={selected ? ref : null}
            day={day}
            selected={selected}
            id={formattedDay}
            setSelectedDay={setSelectedDay}
          />
        );
      })}
    </div>
  );
};
