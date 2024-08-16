import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import "./App.css";
import SignupPage from "./component/Signup";
import Navbar from "./component/Navbar";
import LoginPage from "./component/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import ForgotPassword from "./component/ForgotPassword";
import PopularCars from "./component/PopularCars";
import WorkingStep from "./component/WorkingStep";
import ChooseUs from "./component/ChooseUs";
import BookNow from "./component/BookNow";
import ContactUs from "./component/ContactUs";
import EndingPage from "./component/EndingPage";
import PaymentSuccess from "./component/PaymentSuccess";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/become" element={<ForgotPassword />} />
        <Route path="/rentaldeals" element={<PopularCars />} />
        <Route path="/works" element={<WorkingStep />} />
        <Route path="/chooseUs" element={<ChooseUs />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/contactUS" element={<ContactUs />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  </Provider>
);
