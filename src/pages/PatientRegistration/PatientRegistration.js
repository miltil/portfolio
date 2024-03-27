import * as React from "react";
import { useState } from "react";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import PatientInfoPage from "../PatientInfoPage";
import VisitReasonPage from "../VisitReasonPage";

const PatientRegistration = () => {
    const patientProfile = {
        name: "Ashley Williamson",
        gender: "F",
        dob: "January 1, 1985",
        email: "ashleywilliamson@m.com",
        phone: "555-555-5555"
    }

    const [currentPatient, setCurrentPatient] = useState(undefined);

    const pages = [
        { pageName: 'Patient', state: 'current' },
        { pageName: 'Reason', state: 'future' },
        { pageName: 'Timeslot', state: 'future' },
        { pageName: 'Confirm', state: 'future' }
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
        <div className="flex flex-col min-h-screen mx-auto w-full bg-[color:var(--color-neutral-white)]">
            <Header />
            <div className="flex justify-center w-full flex-1"> {/* Adjusted flex-1 for content */}
                <main className="flex flex-col px-5 mt-14 w-full max-w-[480px] md:max-w-[1140px]">
                    <StepIndicator steps={pages} />
                    {/* <PatientInfoPage patientInfoClick={patientInfoClick} currentPatient={currentPatient} patientProfile={patientProfile}/> */}
                    <VisitReasonPage />
                    <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
                        <Button type={true ? "primary" : "disabled"} onClick={handleNext} className="md:w-1/2 md:mr-2">
                            next
                        </Button>
                        <Button type="secondary" onClick={handleBack} className="md:w-1/2 md:ml-2">
                            back
                        </Button>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default PatientRegistration;
