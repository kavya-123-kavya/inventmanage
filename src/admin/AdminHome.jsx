import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHome = () => {
  return (
    <div style={{ display: 'flex' }}>
    <AdminNavbar />
    <div style={{ marginLeft: '250px', padding: '20px', width: 'calc(100% - 250px)' }}>
      {/* Your admin content goes here */}
      <p style={{ fontSize: "18px", color: "#f39f18ff" }}>
          Welcome to the Admin Dashboard. Select an option from the sidebar.
        </p>
    </div>
  </div>
    
  );
};

export default AdminHome;


