import React from "react";
import AdminNavbar from "./AdminNavbar"; // keep navbar on this page too

const ProfileInfo = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminNavbar />
      <div style={{ marginLeft: "250px", padding: "2rem" }}>
        <h1>Profile Information</h1>
        <p>This is where you can update your name, email, and profile picture.</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
