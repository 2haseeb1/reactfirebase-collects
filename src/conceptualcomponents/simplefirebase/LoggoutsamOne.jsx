import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firbase"; 
function Logout() {
  const navigate = useNavigate();

  // Set up a listener for the user's authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // If the user is not logged in, redirect them to the login page
      if (!user) {
        navigate("/login");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button className="bg-red-500 text-white p-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
