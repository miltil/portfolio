import React from "react";

const Button = ({ type, submit, onClick, children }) => {
  const primaryButton = 'w-full justify-center items-center px-16 py-4 mt-5 rounded-md text-[color:var(--color-neutral-white)] bg-[color:var(--color-secondary)] border border-solid border-[color:var(--color-secondary)]';
  const secondaryButton = 'w-full justify-center items-center px-16 py-4 mt-5 rounded-md text-[color:var(--color-secondary)] border border-[color:var(--color-secondary)] border-solid';
  const disabledButton = 'w-full justify-center items-center px-16 py-4 mt-5 rounded-md text-[color:var(--color-neutral-white)] border border-[color:var(--color-neutral-gray)] border-solid bg-[color:var(--color-neutral-gray)] cursor-not-allowed';
  
  let buttonStyle = '';
  if (type === "primary") {
    buttonStyle = primaryButton;
  } else if (type === "secondary") {
    buttonStyle = secondaryButton;
  } else if (type === "disabled") {
    buttonStyle = disabledButton;
  }

  return (
    <button className={buttonStyle} type={submit ? "submit" : "button"} onClick={onClick} disabled={type === "disabled"}>
      <label>{children}</label>
    </button>
  );
};

export default Button;
