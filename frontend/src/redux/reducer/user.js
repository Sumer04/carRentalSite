import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    loading: null,
    error: null,
    message: null,
    isAuthenticated: null,
    sentemail:null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      console.log("here we're showing!!!!");
      state.user = action.payload.newUser;
      state.loading = false;
      state.isAuthenticated = true;
    },
    loginFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isAuthenticated = false;
    },
    registeRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload.newUser;
      state.loading = false;
      state.isAuthenticated = true;
    },
    registerFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isAuthenticated = false;
    },
    logoutRequest:(state)=>{
      state.loading= true;
    },
    logoutSuccess:(state,action)=>{
      state.message =  action.payload.message;
      state.isAuthenticated=false;
      state.loading=false;
    },
    logoutFail:(state,action)=>{
      state.error=  action.payload;
      state.loading= false;
      state.isAuthenticated=true;
    },
    sendEmailRequest:(state)=>{
      state.loading = true;
    },
    sendEmailSuccess:(state,action)=>{
      state.message =  action.payload.message;
      state.loading= false;
      state.sentemail=true;
    },
    sendEmailFail:(state,action)=>{
      state.error = action.payload;
      state.loading =  false;
      state.sentemail=false;
    }
  },
});
export const {
  loginRequest,
  loginSuccess,
  loginFail,
  registeRequest,
  registerFail,
  registerSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  sendEmailRequest,sendEmailSuccess,sendEmailFail
} = userSlice.actions;
export default userSlice.reducer;
