import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const DayOnTimeline = React.forwardRef(({
  setSelectedDay, selected, day, id,
}, ref) => {
  let className = 'box box-day';
  if (selected) className += ' selected';

  const selectDay = (e) => {
    setSelectedDay(e.currentTarget.id);
  };

  return (
    <button
      type="button"
      ref={ref}
      className={className}
      id={id}
      onClick={selectDay}
    >
      {format(day, 'EEE dd.LL.')}
    </button>
  );
});

DayOnTimeline.propTypes = {
  setSelectedDay: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  day: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DayOnTimeline;
