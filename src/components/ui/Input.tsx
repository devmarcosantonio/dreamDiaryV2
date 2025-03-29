import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className='flex flex-col gap-2  '>
            {label && <label className='font-bold' htmlFor={props.id}>{label}</label>}
            <input
                className='border border-gray-300 p-3 rounded-md focus:outline-none'
                desabled={props.disabled}
                {...props}
            />
        </div>
    );
};

