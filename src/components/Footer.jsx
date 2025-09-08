import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#2c3e50",
      color: "white",
      textAlign: "center",
      padding: "20px 0",
      marginTop: "50px",
    }}>
      <p style={{ margin: "5px 0" }}>
        &copy; {new Date().getFullYear()} InventoryPro. All rights reserved.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5px" }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Twitter</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
