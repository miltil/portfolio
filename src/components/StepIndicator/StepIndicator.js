import * as React from "react";

const StepIndicator = ({ steps }) => (
    <div className="relative">
        <div className="w-full relative flex justify-between mt-3 top-0 z-50">
        {steps.map(({ pageName, state }, index) => (
            <React.Fragment key={index}>
            <div className="flex flex-col items-center max-w-[1140px]">
                <div className="text-center">
                <label className="[color:var(--color-neutral-dark)]">{pageName}</label>
                </div>
                <div
                className={`flex flex-col justify-center items-center w-8 h-8 rounded-full w-[32px] h-[32px] md:w-[48px] md:h-[48px] ${
                    state === "past" ? "bg-[color:var(--color-secondary-dark)]" : "bg-[color:var(--color-primary-light)]"
                }`}
                >
                <div
                    className={`rounded-full bg-[color:var(--color-secondary-dark)] ${
                    state === "current" && "w-[14px] h-[14px] md:w-[22px] md:h-[22px]"
                    }`}
                />
                </div>
            </div>
            </React.Fragment>
        ))}
        </div>
        <div className="absolute justify-center items-center left-[24px] h-[1px] bg-[color:var(--color-secondary-dark)] md:w-[1020px] w-[80%] md:top-[60px] top-[52px]" />
    </div>
  );

export default StepIndicator;
