import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup({
    linkName,
    linkUrl="#"
  }){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
        <div className='bg-white lg:w-1/4 w-[70%] h-[95%] rounded-lg'>
        <div className='flex flex-col justify-center items-center font-bold text-3xl mx-auto py-8'>
        Signup
        </div>
        <form className=" space-y-6 " onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" className="mb-2" />
        </div>

         

      </form>

      <div className="lg:mt-24 mt-16 text-center">
      <p className="text-gray-600 ">or Login using</p>
      <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
      </div>
      </div>
    )
}