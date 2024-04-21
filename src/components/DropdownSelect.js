import React from 'react';

const DropdownSelect = ({ label, options, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-sm font-medium text-[color:var(--color-neutral-gray)] pr-2 mb-1">{label}</label>
      <div className=''>
        <select
          id={label}
          name={label}
          onChange={onChange}
          className="form-select mt-1 block w-full px-2 py-2 outline outline-[color:var(--color-neutral-gray)] outline-1 border-r-8 border-transparent rounded-lg focus:outline-none focus:outline-[color:var(--color-primary)]"
        >
          {options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownSelect;
