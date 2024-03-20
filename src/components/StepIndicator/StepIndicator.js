import * as React from "react";

const StepIndicator = ({ steps }) => (
    <div className="relative">
        <div className="relative flex justify-between mt-3 top-0 z-50">
        {steps.map(({ pageName, state }, index) => (
            <React.Fragment key={index}>
            <div className="flex flex-col items-center">
                <div className="text-center">
                <label className="[color:var(--color-neutral-dark)]">{pageName}</label>
                </div>
                <div
                className={`flex flex-col justify-center items-center w-8 h-8 rounded-full ${
                    state === "past" ? "bg-[color:var(--color-secondary-dark)]" : "bg-[color:var(--color-primary-light)]"
                }`}
                >
                <div
                    className={`rounded-full bg-[color:var(--color-secondary-dark)] ${
                    state === "current" && "w-3.5 h-3.5"
                    }`}
                />
                </div>
            </div>
            </React.Fragment>
        ))}
        </div>
        <div className="absolute justify-center items-center left-[24px] h-[1px] bg-[color:var(--color-secondary-dark)] w-10/12 top-[52px]" />
    </div>
  );

export default StepIndicator;
