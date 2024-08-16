import {configureStore} from '@reduxjs/toolkit'
import axios from "axios";
import useReducer  from  "./reducer/user.js"
export const server =  "http://localhost:4000/api/v1";
export const instance = axios.create({
    baseURL: server,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
const store= configureStore({
    reducer:{
        useReducer
    }
 
})
export default store;
