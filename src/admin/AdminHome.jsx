import React, { useEffect, useState } from "react";

const AdminHome = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if(storedEmail){
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome, {email ? email : "User"}!</h1>
      <p>This is your home page.</p>
    </div>
  );
};

export default AdminHome;
