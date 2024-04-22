import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { convertTimeToCalc } from "../utils/timeUtils";
import { days, timeSlots } from "../utils/timeData";
import Button from "../components/Button";
import DropdownSelect from "../components/DropdownSelect";
import TimeChip from "../components/TimeChip";

const TimeslotPickerPage = () => {
  const [state, setState] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(days[0].name);
  const [startTime, setStartTime] = useState(convertTimeToCalc(timeSlots[0].name));
  const [endTime, setEndTime] = useState(convertTimeToCalc(timeSlots[0].name));
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const saveData = () => {
    setState({ ...state, selectedTimeSlots: selectedTimeSlots });
    navigate("/confirm");
  };

  const handleBack = () => {
    navigate("/visit-reason");
  };

  const checkValidTimes = (startTime, endTime) => {
    if (endTime - startTime > 0) {
      return true;
    } else {
      return false;
    }
  }

  const handleDayChange = (event) => {
    const day = event.target.value;
    setSelectedDay(day);
  };

  const handleStartTimeChange = (event) => {
    const startTime = convertTimeToCalc(event.target.value);
    setStartTime(startTime);
  };

  const handleEndTimeChange = (event) => {
    const endTime = convertTimeToCalc(event.target.value);
    setEndTime(endTime);
  };

  const handleAddTimeslot = () => {
    if (selectedDay && startTime && endTime && checkValidTimes(startTime, endTime)) {
      const updatedTimeSlots = [...selectedTimeSlots];
  
      const existingDayIndex = updatedTimeSlots.findIndex(
        (slot) => slot.day === selectedDay
      );
  
      if (existingDayIndex !== -1) {
        const existingDay = updatedTimeSlots[existingDayIndex];
  
        const overlappingTime = existingDay.times.some(
          (timeSlot) =>
            (timeSlot.startTime < endTime && timeSlot.endTime > startTime)
        );
  
        if (!overlappingTime) {
          updatedTimeSlots[existingDayIndex] = {
            ...existingDay,
            times: [
              ...existingDay.times,
              { startTime, endTime },
            ],
          };
        }
      } else {
        updatedTimeSlots.push({ day: selectedDay, times: [{ startTime, endTime }] });
      }
  
      setSelectedTimeSlots(updatedTimeSlots);
    }
  };
  

  const handleRemoveTimeslot = (dayIndex, timeIndex) => {
    const updatedTimeSlots = [...selectedTimeSlots];
    const day = updatedTimeSlots[dayIndex];
    day.times.splice(timeIndex, 1);

    if (day.times.length === 0) {
      updatedTimeSlots.splice(dayIndex, 1);
    } else {
      updatedTimeSlots[dayIndex] = day;
    }

    setSelectedTimeSlots(updatedTimeSlots);
  };

  return (
    <>
      <h2 className="self-center mt-9 md:mt-14 text-center">
        Select your available times
      </h2>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8 mb-6">
            <DropdownSelect
              label="Day"
              options={days}
              onChange={handleDayChange}
            />
            <div className="flex gap-8">
              <DropdownSelect
                label="Start Time"
                options={timeSlots}
                onChange={handleStartTimeChange}
              />
              <DropdownSelect
                label="End Time"
                options={timeSlots}
                onChange={handleEndTimeChange}
              />
            </div>
          </div>
          <Button
            type={checkValidTimes(startTime, endTime) ? "primary" : "disabled"}
            onClick={handleAddTimeslot}
            className="md:w-1/2 self-center"
          >
            Add Timeslots
          </Button>
          <div className="mt-8">
            {selectedTimeSlots.length > 0 && (
              <div className="flex flex-col gap-4">
                <h4>Added Timeslots</h4>
                {selectedTimeSlots.map((daySlot, dayIndex) => (
                  <div key={dayIndex}>
                    <p className="mb-2">{daySlot.day}</p>
                    <div className="flex flex-wrap gap-4">
                      {daySlot.times.map((timeSlot, timeIndex) => (
                        <TimeChip timeSlot={timeSlot} dayIndex={dayIndex} timeIndex={timeIndex} handleRemoveChip={handleRemoveTimeslot} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
          <Button
            type={selectedTimeSlots.length > 0 ? "primary" : "disabled"}
            submit
            className="md:w-1/2 md:mr-2"
          >
            Next
          </Button>
          <Button
            type="secondary"
            onClick={handleBack}
            className="md:w-1/2 md:ml-2"
          >
            Back
          </Button>
        </div>
      </form>
    </>
  );
};

export default TimeslotPickerPage;
