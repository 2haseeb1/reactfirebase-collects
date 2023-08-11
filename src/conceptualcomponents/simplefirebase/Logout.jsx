import React from "react";
import { auth } from "../../firebase/firbase"; 
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to log out?
        </p>
        <button
          className="bg-red-500 text-white p-2 rounded-lg w-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
