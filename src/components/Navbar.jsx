import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);

  const toggleSignup = () => {
    setSignupOpen(prev => !prev);
    setSigninOpen(false); // close signin if signup is opened
  };

  const toggleSignin = () => {
    setSigninOpen(prev => !prev);
    setSignupOpen(false); // close signup if signin is opened
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      backgroundColor: "#2c3e50",
      color: "white",
      position: "relative",
      zIndex: 10
    }}>
      {/* Logo */}
      <div style={{ fontSize: "1.5rem", color: "#e67e22", fontWeight: "bold" }}>
        InventoryPro
      </div>

      {/* Navigation Links */}
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", alignItems: "center", margin: 0 }}>
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
        </li>
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/about">About</Link>
        </li>

        {/* Sign Up Dropdown */}
        <li style={{ position: "relative" }}>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={signupOpen}
            onClick={toggleSignup}
            style={{
              backgroundColor: "#e67e22",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </button>

          {signupOpen && (
            <div style={{
              position: "absolute",
              top: "40px",
              right: 0,
              backgroundColor: "#ecf0f1",
              color: "#2c3e50",
              borderRadius: "5px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              overflow: "hidden",
              minWidth: "120px"
            }}>
              <Link
                to="/signup/admin"
                style={{
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  color: "#2c3e50",
                  fontWeight: 500,
                  borderBottom: "1px solid #bdc3c7",
                  transition: "background 0.3s"
                }}
                onClick={() => setSignupOpen(false)}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#dfe6e9"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#ecf0f1"}
              >
                Admin
              </Link>
              <Link
                to="/signup/user"
                style={{
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  color: "#2c3e50",
                  fontWeight: 500,
                  transition: "background 0.3s"
                }}
                onClick={() => setSignupOpen(false)}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#dfe6e9"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#ecf0f1"}
              >
                User
              </Link>
            </div>
          )}
        </li>

        {/* Sign In Dropdown */}
        <li style={{ position: "relative" }}>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={signinOpen}
            onClick={toggleSignin}
            style={{
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Sign In
          </button>

          {signinOpen && (
            <div style={{
              position: "absolute",
              top: "40px",
              right: 0,
              backgroundColor: "#ecf0f1",
              color: "#2c3e50",
              borderRadius: "5px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              overflow: "hidden",
              minWidth: "120px"
            }}>
              <Link
                to="/admin/signin"
                style={{
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  color: "#2c3e50",
                  fontWeight: 500,
                  borderBottom: "1px solid #bdc3c7",
                  transition: "background 0.3s"
                }}
                onClick={() => setSigninOpen(false)}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#dfe6e9"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#ecf0f1"}
              >
                Admin
              </Link>
              <Link
                to="/user/signin"
                style={{
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  color: "#2c3e50",
                  fontWeight: 500,
                  transition: "background 0.3s"
                }}
                onClick={() => setSigninOpen(false)}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#dfe6e9"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#ecf0f1"}
              >
                User
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
