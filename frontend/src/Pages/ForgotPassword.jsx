import { useState } from "react";
import { notifyError, notifySuccess } from "../utils";
import { Link ,useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
  setEmail(e.target.value);
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { message: "Invalid server response" };
      }

      const { error } = result;

      if (response.ok) {
        notifySuccess(result.message || "Reset link sent successfully");
        setEmail(""); // reset input
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (error && error.details && error.details[0]) {
        notifyError(error.details[0].message);
      } else {
        notifyError(result.message || result.error || "Something went wrong");
      }

    } catch (error) {
      console.error("Error during forgot password:", error);
      notifyError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Forgot your password?</h1>
          <div className="space-y-5">
            <div>
              <p className="text-3xl font-bold text-center text-indigo-700 mb-6">Enter your email and we’ll send you a password reset link.</p>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Enter Email address
            </label>
              <input
                type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              
        
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white-700 hover:bg-indigo-800 text-black font-semibold rounded-lg shadow-md transition duration-200"
            >
              Send Reset Link
            </button>
          </div>
          <p className="mt-6 text-center text-gray-600">
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-semibold">
              Back to login
            </Link>
          </p>
        </div>
        <ToastContainer />
      </form>
    </div>


    // <div className="min-h-screen flex items-center justify-center px-4">
    //   <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl">
    //     <h2 className="text-2xl font-bold text-center text-white mb-4">
    //       Forgot your password?
    //     </h2>
    //     <p className="text-sm text-gray-400 text-center mb-6">
    //       Enter your email and we’ll send you a password reset link.
    //     </p>

    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label htmlFor="email" className="block text-sm font-medium text-gray-300">
    //           Email address
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           value={email}
    //           onChange={handleChange}
    //           placeholder="you@example.com"
    //           className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //          className="w-full py-2 px-4 bg-white-700 hover:bg-indigo-800 text-black font-semibold rounded-lg shadow-md transition duration-200"
    //         >
    //         Send Reset Link
    //       </button>
    //     </form>

    //     <div className="mt-6 text-center">
    //       <a href="/login" className="text-sm text-blue-400 hover:underline">
    //         Back to login
    //       </a>
    //     </div>
    //   </div>
    //   <ToastContainer/>
    // </div>
  );
}

export default ForgotPassword;
