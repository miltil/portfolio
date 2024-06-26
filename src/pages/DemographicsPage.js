import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import Button from "../components/Button";
import PatientInfo from "../components/PatientInfo";

const DemographicsPage = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, patientProfile: patientProfile });
    navigate("/visit-reason");
  };

  const handleBack = () => {
    navigate("/");
  }

  const [defaultProfileSelected, setDefaultProfileSelected] = useState(false);

  const patientInfoClick = () => {
    setDefaultProfileSelected(!defaultProfileSelected);
  }

  const patientProfile = {
    name: "Ashley Williamson",
    gender: "F",
    dob: "January 1, 1985",
    email: "ashleywilliamson@m.com",
    phone: "555-555-5555",
    address: {
      street: "111 1st St",
      city: "Denver",
      state: "CO",
      zip: "80401"
    }
  }

  return (
    <>
      <h2 className="self-center mt-9 md:mt-14 text-center">
        What patient is seeking treatment today?
      </h2>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="mt-10">
          <PatientInfo patientInfoClick={patientInfoClick} selected={defaultProfileSelected} patientProfile={patientProfile}/>
        </div>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
          <Button type={defaultProfileSelected === true ? "primary" : "disabled"} submit className="md:w-1/2 md:mr-2">Next</Button>
          <Button type="secondary" onClick={handleBack} className="md:w-1/2 md:ml-2">Back</Button>
        </div>
      </form>
    </>
  );
};

export default DemographicsPage;
