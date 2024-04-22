import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const SummaryPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  return (
    <>
      <h2 className="self-center mt-9 md:mt-14 text-center">
        Your appointment has been requested!
      </h2>
      <h3 className="self-center mt-9 md:mt-14 max-w-4xl text-center">
        You will receive a confirmation notification when a provider has chosen to see you
      </h3>
      <h3 className="self-center mt-9 md:mt-14 text-center">
        You should hear back in 4 hours
      </h3>
      <div className="mt-10 mb-16 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
          <Button type={"primary"} onClick={handleBack} className="md:w-1/2 self-center">Go to Dashboard</Button>
      </div>
    </>
  );
};

export default SummaryPage;
