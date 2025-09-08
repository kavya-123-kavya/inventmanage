import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const stats = [
    { title: "Total Products", value: 150 },
    { title: "Low Stock", value: 12 },
    { title: "Suppliers", value: 8 },
    { title: "Orders Today", value: 20 },
  ];

  return (
    <div>  
      <Navbar/>   
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
        <p>Overview of your inventory items, stock levels, and activities.</p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px",
          gap: "20px"
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              padding: "20px 40px",
              backgroundColor: "#ecf0f1",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              minWidth: "150px",
              fontWeight: "500"
            }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{stat.value}</h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
