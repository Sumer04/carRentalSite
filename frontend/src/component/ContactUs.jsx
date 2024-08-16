import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { sendEmail } from '../redux/action/user';

const ContactUs = () => {
  const { sentemail } = useSelector((state) => state.useReducer);
  const[input,setInput] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  })
  const dispatch = useDispatch();
  const nav  = useNavigate()
  function InputHandler(e)
  {    setInput({ ...input, [e.target.name]: e.target.value })
  }
  function submithandler(e)
  {
    e.preventDefault();
    const { name, email, phone, message } = input;

    // Additional validation to check if all fields are filled
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(sendEmail(input.name,input.email,input.phone,input.message))
    nav("/contactUs")
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
                name="name"
                placeholder="Enter Your Full Name"
                value={input.name}
                required
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
                  name="email"
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
                  name="phone"
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
                name="message"
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
  )
}

export default ContactUs
