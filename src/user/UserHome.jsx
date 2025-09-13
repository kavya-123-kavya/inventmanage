import React from "react";

const UserHome = () => {
  const email = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token"); // if token exists
    window.location.href = "/signin/user"; // redirect to login
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Welcome, {email}!</h1>
      <p>This is your home page.</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default UserHome;
