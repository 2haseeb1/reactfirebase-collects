import React, { useState } from "react";
import { auth } from "../../firebase/firbase"; 
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate(" ")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const handleRegister = async () => {
    try {
      setError(null);
      await auth.createUserWithEmailAndPassword(email, password);
      // Registration successful, redirect to the appropriate page
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
