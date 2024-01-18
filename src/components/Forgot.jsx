import React, { useState } from 'react';
import Input from './Input';
import FormAction from './FormAction';
import { forgotFields } from '../constants/formFields';
import { Link } from 'react-router-dom';

const fields = forgotFields;
let fieldsState = {};

fields.forEach(field => (fieldsState[field.id] = ''));

function Forgot({
    linkName,
    linkUrl="#"
  }) {
  const [forgotState, setForgotState] = useState(fieldsState);

  const handleChange = (e) => setForgotState({ ...forgotState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forgotState);
    
  };

  return (
    <div className='bg-white lg:w-1/4 w-[70%] h-[95%] rounded-lg'>
      <div className='flex flex-col justify-center items-center text-center font-bold text-3xl mx-auto py-8'>
        Forgot your Password?
      </div>
      <div className='mt-10 text-center mx-6'>
        <p className='text-gray-600 mb-2'>
          Enter the email address associated with your account and we'll send you a link to reset your password
        </p>
      </div>
      <form className='mt-10 space-y-6'>
        <div className='-space-y-px'>
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={forgotState[field.id]} 
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleSubmit} text="Continue" className="mt-5" />
      </form>
      <div className="lg:mt-28 mt-16 text-center">
      <p className="text-gray-600 mb-2">Don't have an account?</p>
      <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
      </div>

    </div>
  );
}

export default Forgot;
