import * as React from "react";
import {useState} from "react";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import PatientInfo from "../../components/PatientInfo/PatientInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import RegisterDependent from "../../components/RegisterDependent/RegisterDependent";

const PatientRegistration = () => {
    const patientProfile = {
        name: "Ashley Williamson",
        gender: "F",
        dob: "January 1, 1985",
        email: "ashleywilliamson@m.com",
        phone: "555-555-5555"
    }

    const [currentPatient, setCurrentPatient] = useState(undefined);

    const steps = [
      {pageName: 'Patient', state: 'current'},
      {pageName: 'Reason', state: 'future'},
      {pageName: 'Timeslot', state: 'future'},
      {pageName: 'Confirm', state: 'future'}
    ];

    const patientInfoClick = () => {
        if (currentPatient !== 'profile') {
            setCurrentPatient('profile');
        } else {
            setCurrentPatient(undefined);
        }
    }

    const handleNext = () => {
      alert('hey!');
    };
  
    const handleBack = () => {
      alert('back!');
    };
  
    return (
      <div className="flex flex-col mx-auto w-full bg-[color:var(--color-neutral-white)] max-w-[480px]">
        <Header/>
        <main className="flex flex-col px-5 mt-14 w-full">
          <StepIndicator steps={steps} />
          <h2 className="self-center mt-9 text-center">
            What patient is seeking treatment today?
          </h2>
          <PatientInfo
            onClick={patientInfoClick}
            selected={currentPatient === 'profile'}
            patientProfile={patientProfile}
          />
          <div className="flex flex-row w-full gap-1.5 mt-4">
            <div className="flex-1 my-auto h-[1px] bg-[color:var(--color-neutral-gray)]" />
            <div className=""><p>OR</p></div>
            <div className="flex-1 my-auto h-[1px] bg-[color:var(--color-neutral-gray)]" />
          </div>
          <RegisterDependent open />
          <div className="mt-10">
            <Button type={currentPatient ? "primary" : "disabled"} onClick={handleNext}>
              next
            </Button>
            <Button type="secondary" onClick={handleBack}>
              back
            </Button>
            </div>
        </main>
        <Footer/>
      </div>
    );
  };

export default PatientRegistration;