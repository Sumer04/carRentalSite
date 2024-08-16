import React, { useState } from "react";

import {useSelector } from "react-redux";


const EmailVerification = () => {
  const { sentemail } = useSelector((state) => state.useReducer);
 

 
  
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div>
        {sentemail ? (
      <div className=" flex-col justify-center items-center border-2 border-gray-200 p-4 shadow-md">
            <h1 className="text-center text-3xl text-green-500 ">
            email sent successfully
          </h1>
          <p className="text-2xl"> we are trying to ressolve your quesry with in 7days</p>
      </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
            <h1 className="text-3xl font-bold text-center mb-6">
              Get In Touch
            </h1>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={input.name}
                  onChange={InputHandler}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Valid Email"
                  value={input.email}
                  onChange={InputHandler}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  value={input.phone}
                  onChange={InputHandler}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message here..."
                  value={input.message}
                  onChange={InputHandler}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-none"
                />
              </div>
              <button
                type="submit"
                onClick={submithandler}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );


export default EmailVerification;
