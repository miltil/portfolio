import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppState } from "../state";
import { convertTimeToDisplay } from "../utils/timeUtils";
import Button from "../components/Button";

const ConfirmationPage = () => {
  const [state, setState] = useAppState();
  const [termsAgree, setTermsAgree] = useState(false);

  const checkHandler = () => {
    setTermsAgree(!termsAgree)
  }

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/visit/:id")
  }

  const handleBack = () => {
    navigate("/timeslots");
  }

  return (
    <>
      <h2 className="self-center mb-6 mt-9 md:mt-14 text-center">
        Confirm your details
      </h2>
        <div className="self-center flex flex-col gap-2">
          <p><b>Patient Name: </b>{state?.patientProfile?.name}</p>
          <p><b>Phone Number: </b>{state?.patientProfile?.phone}</p>
          <p><b>Appointment Reason: </b>{state?.visitReason}</p>
          <p><b>Patient Location: </b></p>
          <img src="/appmap.png" className="w-[300px]" />
          <div>
            <p>{state?.patientProfile?.address?.street}</p>
            <p>{state?.patientProfile?.address?.city}, {state?.patientProfile?.address?.state} {state?.patientProfile?.address?.zip}</p>
            <p className="underline cursor-pointer">Use a different address</p>
          </div>
          <p><b>Available Times: </b></p>
          <ul className="list-disc ml-8 text-[color:var(--color-neutral-dark)]">
            {
              state?.selectedTimeSlots?.map(function(day, i){
                return (
                  <li key={i}>
                    {day.day}
                    <ul className="list-disc ml-8">
                      {
                        day?.times?.map(function(times, i){
                          return (
                            <li key={i}>
                              {convertTimeToDisplay(times.startTime)}-{convertTimeToDisplay(times.endTime)}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                );
              })
            }
          </ul>
          <div className="flex gap-1">
            <input type="checkbox" id="terms" checked={termsAgree} onChange={checkHandler} className="mr-2 w-5" />
            <p>I agree to the </p><p className="underline cursor-pointer">Terms and Conditions</p>
          </div>
        </div>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
          <Button type={termsAgree ? "primary" : "disabled"} onClick={handleNext} className="md:w-1/2 md:mr-2">Submit</Button>
          <Button type="secondary" onClick={handleBack} className="md:w-1/2 md:ml-2">Back</Button>
        </div>
    </>
  );
};

export default ConfirmationPage;
