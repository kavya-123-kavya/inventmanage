import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
const slides = [
  {
    title: "More than 75% of our customers have lasting impacts",
    subtitle: "20-30% reduction in inventory costs",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Automate inventory tracking effortlessly",
    subtitle: "Save time and minimize errors",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Scale your business with confidence",
    subtitle: "Built for modern inventory needs",
    image: "/images/usersignup.png",
  },
];

export default function UserSignin() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Login successful!");
        // Redirect to dashboard/home
        window.location.href = "/userhome";
      } else {
        const errorData = await response.text();
        setMessage(`❌ Login failed: ${errorData}`);
      }
    } catch (error) {
      setMessage("❌ Error connecting to backend.");
    }
  };

  return (
    <>
      <Navbar />
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Left Carousel Section */}
      <div
        style={{
          flex: 1,
          background: "#0b0b0b",
          color: "#E6FFED",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            textAlign: "center",
            height: "550px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "10px",
              color: "#00c853",
              minHeight: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {slides[current].title}
          </h2>

          <img
            src={slides[current].image}
            alt="slide"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          />

          <p
            style={{
              color: "#b2f5b2",
              fontWeight: "600",
              minHeight: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {slides[current].subtitle}
          </p>
        </div>
      </div>

      {/* Right Signin Form */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "400px" }}>
          <h2 style={{ marginBottom: "20px" }}>Welcome back</h2>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <button
              type="submit"
              style={{
                background: "#00c853",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Sign in
            </button>
            {message && (
              <p style={{ fontSize: "14px", marginTop: "10px", color: "red" }}>
                {message}
              </p>
            )}
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Don’t have an account?{" "}
              <a href="/signup/user" style={{ color: "#00c853" }}>
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
};
