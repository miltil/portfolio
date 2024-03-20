import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';

const PatientInfo = ({ onClick, selected, patientProfile: { name, gender, dob, email, phone } }) => (
    <div onClick={onClick} className={`flex gap-4 pt-2 pr-1.5 pb-4 pl-4 mt-6 text-base rounded-md border-solid cursor-pointer ${selected ? "border-[color:var(--color-secondary)] border-[3px]" : "border-[color:var(--color-neutral-gray)] border-[1px]"}`}>
        <AccountCircleIcon fontSize="large" className="[color:var(--color-secondary)] mx-2 my-auto scale-150"/>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="flex gap-5 justify-between items-start">
                <div className="flex flex-col mt-3">
                    <div><p>{`${name} - ${gender}`}</p></div>
                    <div><p>{dob}</p></div>
                </div>
                <EditIcon className="[color:var(--color-secondary)]"/>
            </div>
            <div><p>{email}</p></div>
            <div><p>{phone}</p></div>
        </div>
    </div>
);

export default PatientInfo;