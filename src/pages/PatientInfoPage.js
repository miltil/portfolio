import * as React from "react";
import PatientInfo from "../components/PatientInfo/PatientInfo";
import RegisterDependent from "../components/RegisterDependent/RegisterDependent";

const PatientInfoPage = ({patientInfoClick, currentPatient, patientProfile}) => (
    <>
        <h2 className="self-center mt-9 md:mt-14 text-center">
            What patient is seeking treatment today?
        </h2>
        <div className="mt-6 md:mt-9 flex flex-col md:flex-row md:justify-between md:gap-10">
            <PatientInfo
                onClick={patientInfoClick}
                selected={currentPatient === 'profile'}
                patientProfile={patientProfile}
            />
            <div className="flex flex-row w-full gap-1.5 mt-4 md:w-60">
                <div className="flex-1 my-auto h-[1px] bg-[color:var(--color-neutral-gray)]" />
                <div className="self-center md:mx-2"><p>OR</p></div>
                <div className="flex-1 my-auto h-[1px] bg-[color:var(--color-neutral-gray)]" />
            </div>
            <RegisterDependent open />
        </div>
    </>
)

export default PatientInfoPage;