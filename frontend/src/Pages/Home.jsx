import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import {  notifySuccess } from "../utils";
import { ToastContainer } from "react-toastify";
function Home() {
  const Navigate=useNavigate();
  const [loggedInUser,setLoggedInUser]=useState('');
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    localStorage.removeItem("cart"); // Force clear if needed

    
    setLoggedInUser(user || "");
    
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    notifySuccess('User logged out');
    setTimeout(() => {
      Navigate('/login');
    }, 1000);
  }
  useEffect(() => {
  const fetchProducts = async () => {
    try {
            const headers={
               headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`

        }
        
      }
      const res = await fetch("http://localhost:3000/products",headers);

      const data = await res.json();
      console.log(data);
      // setProducts(data); 
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  fetchProducts();
}, []);

  return (
    <div className="  items-center justify-center text-black p-4">
      
      <h1 className="text-4xl font-bold mb-6">Welcome, {loggedInUser} 👋</h1>
      
      <button 
        onClick={handleLogout} 
        className="px-6 py-2 bg-red-600 hover:bg-red-700 transition duration-300 rounded-full text-black text-lg shadow-lg"
      >
        Logout
      </button>
      
      <ToastContainer />
    </div>
  );
}

export default Home;
