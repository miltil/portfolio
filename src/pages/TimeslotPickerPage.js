import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import Button from "../components/Button";

const TimeslotPickerPage = () => {
  const [state, setState] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  const handleBack = () => {
    navigate("/visit-reason");
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
            <Button type={true ? "primary" : "disabled"} submit className="md:w-1/2 md:mr-2">Next</Button>
            <Button type="secondary" onClick={handleBack} className="md:w-1/2 md:ml-2">Back</Button>
        </div>
      </form>
    </>
  );
};

export default TimeslotPickerPage;
