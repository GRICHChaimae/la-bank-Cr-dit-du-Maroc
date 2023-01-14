import React from 'react'

export default function Input({
    className,
    htmlFor,
    type,
    name,
    children,
    onChange,
    value
}) {
  return (
    <div className={className}>
        <label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-gray-700 undefined"
        >
            {children}
        </label>
        <div className="flex flex-col items-start">
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
        </div>
    </div>
  )
}
