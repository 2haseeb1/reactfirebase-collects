


import { Link } from "react-router-dom";
import React, { useState } from "react";
import { auth } from '../../firebase/firbase'




function Login() {
  const [email, setEmail] =useState(" ")
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center h-screen">
          
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="flex flex-col w-80" onSubmit={handleLogin}>
        <input
          className="border border-gray-300 p-2 mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
                  required
                
        />
        <input
          className="border border-gray-300 p-2 mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button className="bg-blue-500 text-white p-2 mb-2" type="submit">
          Login
              </button>
              
      </form>
      <div className="mt-4">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
                  </Link>
                
        </p>
      </div>
    </div>
  );
}

export default Login;
