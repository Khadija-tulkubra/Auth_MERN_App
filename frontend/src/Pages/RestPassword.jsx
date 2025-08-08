// ResetPassword.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { notifyError ,notifySuccess} from "../utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:3000/auth/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }), // token body me bhejne ki zarurat nahi
    });

    const result = await response.json();

    if (response.ok) {
      notifySuccess(result.message || "Password reset successfully!");
      setPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      notifyError(result.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Error during reset password:", error);
    notifyError("Something went wrong. Please try again later.");
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <form className="space-y-5" onSubmit={handleReset}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Reset Password</h1>
        
              
          
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Enter new password
            </label>
              <input
                
            
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white-700 hover:bg-indigo-800 text-black font-semibold rounded-lg shadow-md transition duration-200"
            >
              Reset Password
            </button>
          </div>
      
        <ToastContainer />
      </form>
    </div>


//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//   <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl">
//     <h2 className="text-3xl font-bold text-center text-white mb-6">
//       Reset Password
//     </h2>
//     <form onSubmit={handleReset} className="space-y-5">
//       <input
//         type="password"
//         placeholder="Enter new password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
//                    focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//          className="w-full py-2 px-4 bg-white-700 hover:bg-indigo-800 text-black font-semibold rounded-lg shadow-md transition duration-200"
            
//       >
//         Reset Password
//       </button>
//     </form>
//   </div>
//   <ToastContainer/>
// </div>

  );
};

export default ResetPassword;
