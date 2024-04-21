import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { convertTimeToDisplay } from '../utils/timeUtils';

const TimeChip = ({ timeSlot, dayIndex, timeIndex, handleRemoveChip }) => {
  return (
    <div
    key={timeIndex}
    className="flex items-center border border-[color:var(--color-secondary)] border-2 rounded-md p-2"
    >
      <span><p>{`${convertTimeToDisplay(timeSlot.startTime)} - ${convertTimeToDisplay(timeSlot.endTime)}`}</p></span>
      <CloseIcon
        type="button"
        onClick={() => handleRemoveChip(dayIndex, timeIndex)}
        className="ml-2 text-[color:var(--color-neutral-dark)] cursor-pointer"
      />
    </div>
  );
}

export default TimeChip;
