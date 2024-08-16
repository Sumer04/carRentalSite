import {logoutRequest,logoutSuccess,logoutFail, loginRequest, loginFail, loginSuccess,registeRequest ,registerFail,registerSuccess,sendEmailRequest,sendEmailSuccess,sendEmailFail} from "../reducer/user.js";
import { instance } from "../store.js";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    console.log(email, password);
    const {data} =  await instance.post("/login",{email,password});
   

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error?.response?.data?.message));
  }
};

export const register =  (name,email,password) =>async(dispatch)=>{
    try {
      console.log(name,email,password)
        dispatch(registeRequest());
        const {data} = await instance.post("/register",{name,email,password})
        console.log(data)
        dispatch(registerSuccess(data));
    } catch (error) {
       dispatch(registerFail(error?.response?.data?.message))
    }
}

export const logout = ()=>async(dispatch)=>{
  try {
    dispatch(logoutRequest())
    const { data } = await instance.get("/logout");
    dispatch(logoutSuccess(data))
  } catch (error) {
    dispatch(logoutFail(error?.response?.data?.message))
  }
}
export const sendEmail = (name,email,phone,message)=>async(dispatch)=>{
  try {
    console.log("ss")
    dispatch(sendEmailRequest())
    const { data } = await instance.post("/sendEmail",{name,email,phone,message});
    console.log(data);
    dispatch(sendEmailSuccess(data))
  } catch (error) {
    dispatch(sendEmailFail(error?.response?.data?.message))
  }
}