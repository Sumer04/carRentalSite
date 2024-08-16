// src/pages/SignupPage.js
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/action/user";
const SignupPage = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const InputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();

    dispatch(register(input.name, input.email, input.password));
    nav("/");
    // .then(() => {
    //   nav("/");
    // })
    // .catch((error) => {
    //   console.error("Registration failed:", error);
    // });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={InputHandler}
              value={input.name}
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={InputHandler}
              value={input.email}
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={InputHandler}
              value={input.password}
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={SubmitHandler}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
