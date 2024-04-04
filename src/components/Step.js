const Step = ({pageName, state}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-1">
                <label className="[color:var(--color-neutral-dark)]">{pageName}</label>
            </div>
            <div className={`flex flex-col justify-center items-center w-8 h-8 rounded-full w-[32px] h-[32px] md:w-[36px] md:h-[36px] ${state === "past" ? "bg-[color:var(--color-secondary-dark)]" : "bg-[color:var(--color-primary-light)]"}`}>
                <div className={state === "present" ? "rounded-full bg-[color:var(--color-secondary-dark)] w-[14px] h-[14px] md:w-[18px] md:h-[18px]" : undefined} />
            </div>
        </div>
    )
}

export default Step;
