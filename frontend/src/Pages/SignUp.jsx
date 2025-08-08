import { Link, Navigate, useNavigate} from "react-router-dom";
import { notifySuccess,notifyError } from "../utils";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
function SignUp() {
  const [SignUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value
    }));
    console.log(`${name}: ${value}`);
  };
  const Navigate = useNavigate();
  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log("Sign Up Info:", SignUpInfo);
    const { name, email, password } = SignUpInfo;
    if (!name || !email || !password) {
      console.error("All fields are required");
      notifyError("All fields are required");
      return;
    }

   
    try {
     
      const url = 'http://localhost:3000/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: SignUpInfo.name.trim(),
          email: SignUpInfo.email.trim(),
          password: SignUpInfo.password.trim()
        }),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { message: "Invalid server response" };
      }
      const {error} = result;
      if (response.ok) {
        console.log("Sign Up Successful:", result);
        notifySuccess(result.message || "Sign Up Successful");
        setSignUpInfo({ name: "", email: "", password: "" }); 
        setTimeout(() => {
          Navigate("/login");
        }, 1000);
      } else if(error) {
        const details=error.details[0].message;
        notifyError(details);
      
      }
      else {
        console.error("Sign Up Failed:", result.message || result.error || JSON.stringify(result));
        notifyError(result.message || result.error || "Sign Up Failed");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      notifyError("Sign Up Failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create your account</h1>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Enter username
            </label>
              <input
                onChange={handleChange}
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your Name"
                
                value={SignUpInfo.name}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Enter email
            </label>
              <input
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
          
                value={SignUpInfo.email}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Enter pasword
            </label>
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="••••••••"
            
                value={SignUpInfo.password}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white-700 hover:bg-indigo-800 text-black font-semibold rounded-lg shadow-md transition duration-200"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default SignUp;
