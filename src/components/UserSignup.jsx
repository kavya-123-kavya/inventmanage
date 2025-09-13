import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const slides = [
  {
    label: "Effortless automation",
    description: "30-50% of manual tasks automated",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Save time daily",
    description: "1-3 hrs saved in order processing",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Cost efficiency",
    description: "20-30% reduction in inventory costs",
    image: "/images/usersignup.png",
  },
];

const UserSignup = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    country: "India",
    state: "Andhra Pradesh",
    agreeTerms: false,
  });

  const navigate = useNavigate();

  // Carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // Input handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Normal signup submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/users/signup", formData);
      console.log("User registered:", res.data);
      alert("✅ Account created successfully!");
      navigate("/user/signin");
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Failed to create account. Try again.");
    }
  };

  // Google signup success
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User:", decoded);

      const googleUser = {
        email: decoded.email,
        password: decoded.sub, // temp password
        phone: "",
        country: "India",
        state: "Andhra Pradesh",
        agreeTerms: true,
      };

      const response = await axios.post("http://localhost:8081/users/signup", googleUser);
      console.log("Google user registered:", response.data);
      alert("✅ Account created successfully with Google!");
      navigate("/user/signin");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        const errorMsg =
          typeof error.response.data === "string"
            ? error.response.data
            : error.response.data.message || "Account already exists. Please sign in.";
        alert(errorMsg);
        navigate("/user/signin");
      } else {
        console.error("Google Signup error:", error);
        alert("Something went wrong. Try again.");
      }
    }
  };

  return (
    <GoogleOAuthProvider clientId="567699573112-probva3dr3599f2ifd5f75asgsfudl8q.apps.googleusercontent.com">
      <div>
        <Navbar />
        <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
          {/* Left Carousel */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#0b0b0b",
              color: "white",
              padding: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00c853" }}>
              Experience the power of smart inventory
            </h2>

            <div
              style={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={slides[current].image}
                alt="slide"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ marginTop: "20px", fontSize: "1rem", color: "#b2f5b2" }}>
              <p>
                <strong>{slides[current].label}</strong> {slides[current].description}
              </p>
            </div>
          </div>

          {/* Right Signup Form */}
          <div
            style={{
              flex: 1,
              padding: "50px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ marginBottom: "30px", fontSize: "1.8rem", color: "#333" }}>
              Let's get started
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{ ...inputStyle, flex: 1 }}
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={{ ...inputStyle, flex: 1 }}
                  required
                />
              </div>

              <label style={{ fontSize: "0.9rem" }}>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />{" "}
                I agree to the Terms of Service and Privacy Policy.
              </label>

              <button
                type="submit"
                style={{
                  padding: "14px",
                  backgroundColor: "#00c853",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Create your account
              </button>
            </form>

            {/* OR Divider */}
            <div style={{ textAlign: "center", margin: "20px 0", fontSize: "0.9rem", color: "#888" }}>
              OR
            </div>

            {/* Google Signup */}
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => alert("Google sign-in failed")} />

            <div style={{ marginTop: "10px", fontSize: "0.9rem" }}>
              Already have an account?{" "}
              <Link to="/user/signin" style={{ color: "#00c853", textDecoration: "none" }}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

export default UserSignup;
