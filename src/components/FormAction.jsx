import React from 'react'


    export default function FormAction({
        handleSubmit,
        type='Button',
        action='submit',
        text
    }){
        return(
            <>
            {
                type==='Button' ?
                <button
                    type={action}
                    className="w-3/4 flex justify-center ml-11 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-cyan-500 via-indigo-400 to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onSubmit={handleSubmit}
                >
    
                    {text}
                </button>
                :
                <></>
            }
            </>
        )
    }
  
