import * as React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const RegisterDependent = ({ open }) => (
    <button className="flex gap-2 mt-3.5">
    {open ? <AddCircleIcon className="[color:var(--color-secondary)]" /> : <RemoveCircleIcon className="[color:var(--color-secondary)]" />}
    <h4>Register a Dependent</h4>
    </button>
)

export default RegisterDependent;
