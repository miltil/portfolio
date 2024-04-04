import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/visit/:id")
  }

  const handleBack = () => {
    navigate("/");
  }

  return (
    <>
      <h2 className="self-center mt-9 md:mt-14 text-center">
        Confirm your details
      </h2>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
            <Button type="primary" onClick={handleNext} className="md:w-1/2 md:mr-2">See Appointment Details</Button>
            <Button type="secondary" onClick={handleBack} className="md:w-1/2 md:ml-2">Cancel Appointment</Button>
        </div>
    </>
  );
};

export default ConfirmationPage;
