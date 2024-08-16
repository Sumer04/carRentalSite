import React from "react";
import axios from "axios"
const BookNow = ({amount,PaymentHandler}) => {
 const checkOutHandler = async (e) => {
  e.preventDefault()
  const amount = 4000
  try {
      console.log("Amount sent to backend:", amount);
      const {
        data: { key },
      } = await axios.get("http://localhost:4000/api/v1/getKey");

      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/v1/checkout", {
        amount,
      });

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "ShivamExport",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/v1/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error, "error");
    }
  };


  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Book Your Ride Now
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Wide Fleet Selection: Choose Your Perfect Ride
        </p>

        <form className="space-y-4" onSubmit={ checkOutHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              name="number"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Point
            </label>
            <input
              type="text"
              placeholder="Enter Your Pickup Point"
              name="pickup-point"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Drop-off Point
            </label>
            <input
              type="text"
              placeholder="Enter Your Drop-off Point"
              name="Drop point"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              placeholder="Enter Your Date"
              name="Date"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600/50 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
