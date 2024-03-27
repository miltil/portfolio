import * as React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const RegisterDependent = ({ open }) => (
    <div className="w-full flex items-center">
        <button className="flex gap-2 md:gap-4 mt-3.5 items-center">
        {open ? <AddCircleIcon className="[color:var(--color-secondary)] md:scale-150" /> : <RemoveCircleIcon className="[color:var(--color-secondary)]" />}
        <h4 className="">Register a Dependent</h4>
        </button>
    </div>
)

export default RegisterDependent;
