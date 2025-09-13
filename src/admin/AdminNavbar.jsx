import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Package, FileText, Settings, LogOut, ChevronDown, Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";


  

const AdminNavbar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleHoverEnter = (e) => {
    e.currentTarget.style.background = "#ff6700";
    e.currentTarget.style.color = "black";
  };

  const handleHoverLeave = (e) => {
    if (e.currentTarget.id !== activeItem) {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "white";
    }
  };

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Home, path: "/" },
    { id: "users", name: "Users", icon: Users, path: "/users" },
    { id: "inventory", name: "Inventory", icon: Package, path: "/admin/inventory" },
    { id: "reports", name: "Reports", icon: FileText, path: "/reports" },
    { id: "settings", name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div style={navbarStyle}>
      {/* Logo */}
      <div style={logoStyle}>
        <div style={logoTextStyle}>Admin Panel</div>
      </div>

      {/* Search Bar */}
      <div style={searchContainerStyle}>
        <div style={searchBoxStyle}>
          <Search size={18} style={{ marginRight: "10px", color: "#888" }} />
          <input 
            type="text" 
            placeholder="Search..." 
            style={searchInputStyle}
          />
        </div>
      </div>

      {/* Menu */}
      <div style={menuContainerStyle}>
        <ul style={menuListStyle}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li 
                key={item.id}
                id={item.id}
                style={{
                  ...menuItemStyle,
                  backgroundColor: activeItem === item.id ? "#ff6700" : "transparent",
                  color: activeItem === item.id ? "black" : "white"
                }}
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <Link to={item.path} style={linkStyle}>
                  <IconComponent size={20} /> 
                  <span style={{ marginLeft: "10px" }}>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile & Logout */}
      <div style={footerStyle}>
        <div 
          style={profileStyle}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <div style={avatarStyle}>A</div>
          <div style={userInfoStyle}>
            <div style={userNameStyle}>Admin User</div>
            <div style={userRoleStyle}>Administrator</div>
          </div>
          <ChevronDown size={16} style={{ marginLeft: "auto" }} />
        </div>

        {isDropdownOpen && (
        <div style={dropdownStyle}>
          <div
            style={dropdownItemStyle}
            onClick={() => navigate("/account-settings")}
          >
            <Settings size={16} />
            <span>Account Settings</span>
          </div>

          <div style={dropdownItemStyle}>
            <Bell size={16} />
            <span>Notifications</span>
          </div>
        </div>
      )}

        <button
          style={logoutButtonStyle}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          <LogOut size={20} /> 
          <span style={{ marginLeft: "10px" }}>Logout</span>
        </button>
      </div>
    </div>
  );
};

// Styles
const navbarStyle = {
  width: "250px",
  backgroundColor: "#000",
  color: "white",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  padding: "0",
  boxSizing: "border-box",
  zIndex: 1000,
};

const logoStyle = {
  padding: "20px",
  borderBottom: "1px solid #333",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const logoTextStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#ff6700",
};

const searchContainerStyle = {
  padding: "15px",
  borderBottom: "1px solid #333",
};

const searchBoxStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#222",
  borderRadius: "5px",
  padding: "8px 12px",
};

const searchInputStyle = {
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  outline: "none",
  width: "100%",
  fontSize: "14px",
};

const menuContainerStyle = {
  flex: 1,
  padding: "15px 0",
  overflowY: "auto",
};

const menuListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "12px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  margin: "5px 10px",
  transition: "all 0.3s ease",
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  width: "100%",
};

const footerStyle = {
  padding: "15px",
  borderTop: "1px solid #333",
};

const profileStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  marginBottom: "15px",
  transition: "background 0.3s",
};

const avatarStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#ff6700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "black",
  marginRight: "10px",
};

const userInfoStyle = {
  display: "flex",
  flexDirection: "column",
};

const userNameStyle = {
  fontWeight: "bold",
  fontSize: "14px",
};

const userRoleStyle = {
  fontSize: "12px",
  color: "#888",
};

const dropdownStyle = {
  backgroundColor: "#222",
  borderRadius: "5px",
  marginBottom: "15px",
  padding: "5px 0",
};

const dropdownItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px 15px",
  fontSize: "14px",
  gap: "10px",
  cursor: "pointer",
  transition: "background 0.3s",
};

const logoutButtonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#222",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

export default AdminNavbar;