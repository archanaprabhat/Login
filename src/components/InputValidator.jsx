// InputValidator.jsx
import React from 'react';

const InputValidator = ({ value, validator, errorMessage }) => {
  return (
    <>
      {!validator(value) && value !== '' && (
        <span className="text-red-500 ml-10">{errorMessage}</span>
      )}
    </>
  );
};