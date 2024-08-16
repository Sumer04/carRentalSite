// import BookNow from "../BookNow";
// import axios from 'axios';

// const PaymentHandler = async (e) => {
//   e.preventDefault();
//   const amount = 4000;
//   try {
//     console.log("Amount sent to backend:", amount);
//     const { data: { key } } = await axios.get("http://localhost:4000/api/v1/getKey");
//     const { data: { order } } = await axios.post("http://localhost:4000/api/v1/checkout", { amount });

//     const options = {
//       key, // Enter the Key ID generated from the Dashboard
//       amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency: "INR",
//       name: "ShivamExport",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       callback_url: "http://localhost:4000/api/v1/paymentverification",
//       prefill: {
//         name: "Gaurav Kumar",
//         email: "gaurav.kumar@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };
    
//     const razor = new window.Razorpay(options);
//     razor.open();
//   } catch (error) {
//     console.error("Payment error:", error);
//   }
// };

// export default PaymentHandler;
