import React from "react";
import { Home, Users, Package, FileText, Settings, LogOut } from "lucide-react";

const AdminPage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "20px",
            fontSize: "22px",
            fontWeight: "bold",
            color: "orange",
            borderBottom: "1px solid #333",
          }}
        >
          Admin Panel
        </div>

        {/* Menu */}
        <div style={{ flex: 1, padding: "15px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li
              style={menuItemStyle}
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}
            >
              <Home size={20} /> <span style={{ marginLeft: "10px" }}>Dashboard</span>
            </li>
            <li
              style={menuItemStyle}
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}
            >
              <Users size={20} /> <span style={{ marginLeft: "10px" }}>Users</span>
            </li>
            <li
              style={menuItemStyle}
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}
            >
              <Package size={20} /> <span style={{ marginLeft: "10px" }}>Inventory</span>
            </li>
            <li
              style={menuItemStyle}
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}
            >
              <FileText size={20} /> <span style={{ marginLeft: "10px" }}>Reports</span>
            </li>
            <li
              style={menuItemStyle}
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}
            >
              <Settings size={20} /> <span style={{ marginLeft: "10px" }}>Settings</span>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div style={{ padding: "15px", borderTop: "1px solid #333" }}>
          <button
            style={logoutButtonStyle}
            onMouseEnter={(e) => handleHoverEnter(e)}
            onMouseLeave={(e) => handleHoverLeave(e)}
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: "250px", flex: 1, padding: "20px", background: "#f4f4f4" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "15px" }}>Admin Home</h1>
        <p style={{ fontSize: "18px", color: "#333" }}>
          Welcome to the Admin Dashboard. Select an option from the sidebar.
        </p>
      </div>
    </div>
  );
};

// Common style for sidebar items
const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  color: "white",
  transition: "all 0.3s ease",
};

// Logout button style
const logoutButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100%",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#222",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

// Hover Handlers
const handleHoverEnter = (e) => {
  e.currentTarget.style.background = "orange";
  e.currentTarget.style.color = "black";
  e.currentTarget.style.transform = "scale(1.08)";
};

const handleHoverLeave = (e) => {
  e.currentTarget.style.background = e.currentTarget.tagName === "BUTTON" ? "#222" : "black";
  e.currentTarget.style.color = "white";
  e.currentTarget.style.transform = "scale(1)";
};

export default AdminPage;
