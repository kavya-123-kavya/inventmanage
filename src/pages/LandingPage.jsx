import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FeatureCard = ({ icon, title, description }) => (
  <div style={{
    backgroundColor: "#ecf0f1",
    padding: "25px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  }}
    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0px)"}
  >
    <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{icon}</div>
    <h3 style={{ color: "#2980b9", marginBottom: "10px" }}>{title}</h3>
    <p style={{ fontSize: "0.95rem", color: "#2c3e50" }}>{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 140px)",
        background: "linear-gradient(to right, #2980b9, #6dd5fa)",
        color: "white",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to InventoryPro</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Manage your inventory efficiently and effectively with real-time tracking, analytics, and reporting.
        </p>
        <Link to="/dashboard" style={{
          padding: "12px 30px",
          backgroundColor: "#e67e22",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "5px",
          transition: "0.3s"
        }}>
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px", color: "#2980b9" }}>
          Key Features
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px"
        }}>
          <FeatureCard
            icon="📦"
            title="Inventory Tracking"
            description="Keep track of products and stock levels in real-time."
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Reports"
            description="Generate detailed reports for better decision making."
          />
          <FeatureCard
            icon="🤝"
            title="Supplier Management"
            description="Manage your suppliers and orders efficiently."
          />
          <FeatureCard
            icon="🔔"
            title="Alerts & Notifications"
            description="Get notified when stock is low or orders need attention."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;