import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const stats = [
  { label: "1-3 hrs per day", description: "saved in order processing time", image: "https://thevirtualinsight.com/wp-content/uploads/2025/08/i-3.webp" },
  { label: "20-30%", description: "reduction in inventory costs", image: "data:image/jpeg;base64,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" },
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
