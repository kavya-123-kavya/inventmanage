import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const stats = [
  { label: "1-3 hrs per day", description: "saved in order processing time", image: "https://thevirtualinsight.com/wp-content/uploads/2025/08/i-3.webp" },
  { label: "20-30%", description: "/images/usersignup.png"},
  { label: "30-50%", description: "of manual tasks automated", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwt2pYenqySzJVBzSogFrtuvqLCQCsalpKA&s" },
];

const AdminSignin = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/admin/login", credentials);
      alert("✅ Logged in successfully!");
      navigate("/admin/home");
      console.log("Login response:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
      alert("❌ Invalid credentials, please try again.");
    }
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* Left Info Panel */}
      <div style={{
        flex: 1,
        backgroundColor: "#1c1c1c",
        color: "white",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>
          Welcome Back, Admin!
        </h2>

        {/* Carousel */}
        <div style={{
          width: "100%",
          height: "280px",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}>
          <img
            src={stats[currentStat].image}
            alt="Carousel"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ marginTop: "20px", fontSize: "1.1rem", textAlign: "center" }}>
          <strong>{stats[currentStat].label}</strong> {stats[currentStat].description}
        </div>
      </div>

      {/* Right Sign-in Form */}
      <div style={{
        flex: 1,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "50px"
      }}>
        <h2 style={{ marginBottom: "30px", fontSize: "1.8rem", color: "#333", textAlign: "center" }}>
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <button type="submit" style={{
            padding: "14px",
            backgroundColor: "#ff4d4d",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: "15px", textAlign: "center", fontSize: "0.9rem" }}>
  Don’t have an account? 
  <Link to="/signup/admin" style={{ color: "#ff4d4d", textDecoration: "none" }}>
    Sign Up
  </Link>
</div>
      </div>
    </div>
    </div>
  );
};

export default AdminSignin;
