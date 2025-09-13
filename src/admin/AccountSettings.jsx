import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar"; // adjust the path if needed

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      {/* Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>Account Settings</h1>
        <p style={textStyle}>
          Manage your profile information, password, and preferences here.
        </p>

        <div style={sectionStyle}>
          <h3>Profile Information</h3>
          <p>Edit your name, email, and profile picture.</p>
          <button style={buttonStyle} onClick={() => navigate("/profile-info")}>
            Go to Profile Page
          </button>
        </div>

        <div style={sectionStyle}>
          <h3>Security</h3>
          <p>Change your password and enable two-factor authentication.</p>
        </div>

        <div style={sectionStyle}>
          <h3>Preferences</h3>
          <p>Manage notification and theme settings.</p>
        </div>
      </div>
    </div>
  );
};

// Styles
const contentStyle = {
  marginLeft: "250px",
  padding: "2rem",
  width: "100%",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const textStyle = {
  marginBottom: "2rem",
};

const sectionStyle = {
  marginBottom: "1.5rem",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#ff6700",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AccountSettings;
