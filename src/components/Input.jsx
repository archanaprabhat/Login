import React from 'react';

const fixedInputClass = "mx-10 relative block w-3/4 border-b-2 px- py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass
}) {
    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <div className="text-sm font-medium text-gray-800 ml-10">{labelText}</div>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
