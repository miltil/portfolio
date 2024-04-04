import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { useEffect } from "react";
import Button from "../components/Button";

const VisitReasonPage = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, setValue } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, visitReason: data.visitReason });
    console.log('patient is:', state.patientProfile, 'visit:', state.visitReason);
    navigate("/timeslots");
  };

  // Use useEffect to log state changes
  useEffect(() => {
    console.log('patient info:', state.patientProfile);
  }, [state.patientProfile]); // Watch for changes in state.patientProfile

  const handleBack = () => {
    navigate("/demographics");
  }

  return (
    <>
      <h2 className="self-center mt-9 md:mt-14 text-center">
        What is your reason for this appointment request?
      </h2>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="mt-6 md:mt-9 flex flex-col md:flex-row md:justify-between md:gap-10">
          <textarea
            id="visitReason"
            name="visitReason"
            rows="4"
            className="block p-2.5 w-full rounded-lg border border-[color:var(--color-neutral-gray)] focus:border-none focus:border-teal"
            placeholder="Example: I have a fever"
            {...register("visitReason")}
            onChange={(e) => setValue("visitReason", e.target.value)}
          />
        </div>
        <div className="mt-10 mb-10 flex flex-col md:flex-row-reverse md:justify-between md:gap-10">
          <Button type={true ? "primary" : "disabled"} submit className="md:w-1/2 md:mr-2">Next</Button>
          <Button type="secondary" onClick={handleBack} className="md:w-1/2 md:ml-2">Back</Button>
        </div>
      </form>
    </>
  );
};

export default VisitReasonPage;
