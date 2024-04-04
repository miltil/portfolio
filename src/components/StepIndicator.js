import { useLocation } from "react-router-dom";
import * as React from "react";
import Step from "./Step";

const StepIndicator = () => {
  const location = useLocation();

  const getState = (path) => {
    const siteMap = ['/demographics', '/visit-reason', '/timeslots', '/confirm'];
    const currentPage = siteMap.indexOf(location.pathname);
    const currentStep = siteMap.indexOf(path);
    if (currentPage === currentStep) {
      return 'present';
    } else {
      if (currentPage > currentStep) {
        return 'past';
      } else {
        return 'future';
      }
    }
  };

  return (
    <div className="relative">
        <div className="w-full relative flex justify-between mt-3 top-0 z-50 items-center max-w-[1140px]">
          <Step pageName="Patient" state={getState("/demographics")}/>
          <Step pageName="Reason" state={getState("/visit-reason")}/>
          <Step pageName="Timeslot" state={getState("/timeslots")}/>
          <Step pageName="Confirm" state={getState("/confirm")}/>
        </div>
        <div className="absolute justify-center items-center h-[1px] bg-[color:var(--color-secondary-dark)] md:top-[58px] top-[55px] md:w-11/12 w-10/12 -translate-x-1/2 left-1/2" />
    </div>
  );
}

export default StepIndicator;
