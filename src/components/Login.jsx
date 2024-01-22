import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import { loginFields } from '../constants/formFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import RegexInputValidator from './RegexInputValidator';

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

const Login = ({ linkName, linkUrl = '#' }) => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setLoginState({ ...loginState, email: enteredEmail });
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setLoginState({ ...loginState, password: enteredPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if (validEmail && validPassword) {
      authenticateUser();
    } else {
      console.log('Invalid form submission');
    }
  };

  const authenticateUser = () => {
    console.log('Authentication logic goes here');
  };



  return (
    <div className="bg-white lg:w-1/4 w-[70%] h-[95%] rounded-lg">
      <div className="flex flex-col justify-center items-center font-bold text-3xl mx-auto py-8">
        Login
      </div>
      <form className="mt-8 space-y-6">
        <div className="-space-y-px">
          <Input
            key="email"
            handleChange={handleEmailChange}
            value={loginState.email}
            labelText="Email"
            labelFor="email"
            id="email"
            name="email"
            type="email"
            isRequired={true}
            placeholder="Enter your email"
          />
          <RegexInputValidator
            value={loginState.email}
            regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            errorMessage="Please enter a valid email address"
          />

          <Input
            key="password"
            handleChange={handlePasswordChange}
            value={loginState.password}
            labelText="Password"
            labelFor="password"
            id="password"
            name="password"
            type="password"
            isRequired={true}
            placeholder="Enter your password"
          />
          <RegexInputValidator
            value={loginState.password}
            regex={/^.{8,}$/}
            errorMessage="Password must be at least 8 characters"
          />
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
 <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">or signup using</p>
        <div className="flex justify-center space-x-4 mt-5">
          <div className="bg-blue-500 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-8 w-8"
            >
              <path
                fill="#fff"
                d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </div>
          <div className="bg-blue-400 rounded-full p-2">
            <svg
              className="h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fff"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </div>
          <div className="bg-orange-500 rounded-full p-2">
            <svg
              className="h-8"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="#fff"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="lg:mt-28 mt-16 text-center">
        <p className="text-gray-600 mb-2">or Signup using</p>
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </div>
    </div>
  );
}


export default Login;

