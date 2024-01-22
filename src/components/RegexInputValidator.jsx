// RegexInputValidator.jsx
import React from 'react';

const RegexInputValidator = ({ value, regex, errorMessage }) => {
  return (
    <>
      {!regex.test(value) && value !== '' && (
        <span className="text-red-500 ml-10">{errorMessage}</span>
      )}
    </>
  );
};

export default RegexInputValidator;
