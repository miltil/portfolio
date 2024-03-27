import * as React from "react";

const VisitReasonPage = ({patientInfoClick, currentPatient, patientProfile}) => (
    <>
        <h2 className="self-center mt-9 md:mt-14 text-center">
            What is your reason for this appointment request?
        </h2>
        <div className="mt-6 md:mt-9 flex flex-col md:flex-row md:justify-between md:gap-10">
  <div class="w-full">

<textarea id="message" rows="4" class="block p-2.5 w-full rounded-lg border border-[color:var(--color-neutral-gray)] focus:border-[color:var(--color-secondary)]" placeholder="Example: I have a fever"></textarea>

  </div>
</div>
    </>
)

export default VisitReasonPage;