import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/demographics");
  }

  return (
    <>
      <h2 className="self-center mt-9 md:mt-14 text-center">
        Book a visit today!
      </h2>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
        <Button type="primary" onClick={handleClick}>Make Appointment</Button>
        </div>
    </>
  );
};

export default LandingPage;
