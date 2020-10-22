import React from 'react';
import { MDBInput } from 'mdbreact';

const CommonInputWithOutline = ({
  name,
  type,
  value,
  label,
  error,
  onChange,
  id,
  autoComplete,
  inputClass,
  rows,
}) => {
  return (
    <div className='common-input-with-outline-contain'>
      <MDBInput
        className={`${inputClass} ${value && 'input-filled'} ${
          error && 'is-invalid'
        }`}
        type={type}
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        id={id}
        autoComplete={autoComplete}
        rows={rows}
      />
      {error && (
        <p className='error my-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path fill='none' d='M0 0h18v18H0z' />
            <path
              fill='#ed4c4c'
              d='M9.5 17A7.5 7.5 0 1 1 17 9.5 7.5 7.5 0 0 1 9.5 17zm-.75-5.25v1.5h1.5v-1.5zm0-6v4.5h1.5v-4.5z'
              transform='translate(-.5 -.5)'
            />
          </svg>
          <span className='ml-1'>{error}</span>
        </p>
      )}
    </div>
  );
};

export default CommonInputWithOutline;
