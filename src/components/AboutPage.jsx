import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "calc(100vh - 70px)"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#2980b9" }}>
          About InventoryPro
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", marginBottom: "30px" }}>
          InventoryPro is a comprehensive inventory management system designed to help businesses
          manage their products, suppliers, and stock levels efficiently. With an easy-to-use dashboard,
          real-time updates, and insightful analytics, InventoryPro ensures that you always stay
          on top of your inventory.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "30px"
        }}>
          <div style={{
            backgroundColor: "#ecf0f1",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ color: "#e67e22", marginBottom: "10px" }}>Our Mission</h3>
            <p>To simplify inventory management and help businesses save time and reduce errors.</p>
          </div>

          <div style={{
            backgroundColor: "#ecf0f1",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ color: "#e67e22", marginBottom: "10px" }}>Our Vision</h3>
            <p>To become the most reliable and user-friendly inventory management solution for businesses worldwide.</p>
          </div>

          <div style={{
            backgroundColor: "#ecf0f1",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ color: "#e67e22", marginBottom: "10px" }}>Core Values</h3>
            <p>Efficiency, reliability, accuracy, and simplicity in inventory management.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
