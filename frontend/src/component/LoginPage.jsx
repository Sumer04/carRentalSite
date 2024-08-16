import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../redux/action/user";
const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

   const nav = useNavigate()
  
  const inputHandler = (e) =>{
    setInput({...input,[e.target.name]:e.target.value});

  }
  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(input.email,input.password));
    nav("/")
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={inputHandler}
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input.email}
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
              onChange={inputHandler}
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input.password}
           />
          </div>
             <div className="flex gap-3">
             <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500/50 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={submitHandler}
          >
            Login
          </button>
        <Link to ="forgotPassword">
        <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-500/50 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={submitHandler}
          >
            Forgot Password
          </button>
        </Link>
             </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
