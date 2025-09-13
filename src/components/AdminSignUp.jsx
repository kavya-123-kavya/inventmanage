import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; // ✅ Added
import {jwtDecode} from "jwt-decode"; 
import { useNavigate } from "react-router-dom"; 

const stats = [
  { label: "1-3 hrs per day", description: "saved in order processing time", image: "https://thevirtualinsight.com/wp-content/uploads/2025/08/i-3.webp" },
  { label: "20-30%", description: "reduction in inventory costs", image: "/images/costsignup.png"},  
  { label: "30-50%", description: "of manual tasks automated", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwt2pYenqySzJVBzSogFrtuvqLCQCsalpKA&s" },
];


const AdminSignup = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    country: "India",
    state: "Andhra Pradesh",
    agreeTerms: false
  });
 const navigate = useNavigate(); 
  // Carousel change every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8081/admin/register", formData);
    
    console.log("User registered:", response.data);

    // Store email in localStorage
    localStorage.setItem("userEmail", formData.email);

    alert("Account created successfully! and email sent successfully");
    navigate("/admin/home"); // navigate to home page
  } catch (error) {
    console.error("Error creating account:", error);
    if(error.response && error.response.data && error.response.data.message){
        alert(error.response.data.message); // show proper error
    } else {
        alert("Failed to create account. Try again.");
    }
  }
};


  // ✅ Google login handler
   // ✅ Handle Google success
  const handleGoogleSuccess = async (credentialResponse) => {
  const decoded = jwtDecode(credentialResponse.credential);
  console.log("Google User:", decoded);

  const googleUser = {
    email: decoded.email,
    googleId: decoded.sub, 
  };

  try {
    const response = await axios.post("http://localhost:8081/admin/google-signup", googleUser);

    // Store email in localStorage
    localStorage.setItem("userEmail", decoded.email);

    alert("Google signup/login successful!");
    navigate("/admin/home");
  } catch (error) {
    console.error("Google signup error:", error);
    alert("Google signup failed.");
  }
};



  const handleGoogleError = () => {
    console.log("Google Sign-in failed");
    alert("Google sign-in failed. Try again.");
  };


  return (
    <GoogleOAuthProvider clientId="567699573112-probva3dr3599f2ifd5f75asgsfudl8q.apps.googleusercontent.com">   {/* ✅ Wrap everything */}
      <div>
        {/* Navbar Component */}
        <Navbar />
      
        <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
          
          {/* Left Info Panel with Carousel */}
          <div style={{
            flex: 1,
            backgroundColor: "#1c1c1c",
            color: "white",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
              More than 75% of our customers have lasting impacts*
            </h2>

            {/* Image Carousel */}
            <div style={{
              width: "100%",
              height: "300px",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}>
              <img 
                src={stats[currentStat].image} 
                alt="Carousel Image" 
                style={{
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                }} 
              />
            </div>

            <div style={{ marginTop: "20px", fontSize: "1rem" }}>
              <p><strong>{stats[currentStat].label}</strong> {stats[currentStat].description}</p>
            </div>

            <div style={{ marginTop: "auto", fontSize: "0.8rem", marginTop: "50px" }}>
              *Data based on recent survey conducted among Zoho Inventory customers
            </div>
          </div>

          {/* Right Form Panel */}
          <div style={{
            flex: 1,
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff"
          }}>
            <h2 style={{ marginBottom: "30px", fontSize: "1.8rem", color: "#333" }}>Let's get started</h2>
            
            {/* Signup Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
              />

              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
              </div>

              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                I agree to the Terms of Service and Privacy Policy.
              </label>

              <button type="submit" style={{
                padding: "14px",
                backgroundColor: "#ff4d4d",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px"
              }}>
                Create your account
              </button>
            </form>

            {/* OR Divider */}
            <div style={{ textAlign: "center", margin: "20px 0", fontSize: "0.9rem", color: "#888" }}>
              OR
            </div>

            {/* ✅ Google Login Button */}
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("Google Login Failed")}
            />

            <div style={{ marginTop: "10px", fontSize: "0.9rem" }}>
              Already have an account? <Link to="/admin/signin" style={{ color: "#ff4d4d", textDecoration: "none" }}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default AdminSignup;
