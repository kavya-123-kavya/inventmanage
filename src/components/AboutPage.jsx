import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#f9f9fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Page Header */}
      <h1
        style={{
          color: "#4b4fff",
          fontSize: "32px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        About Subscription Management System
      </h1>
      <p
        style={{
          color: "#6b6b8a",
          fontSize: "18px",
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          lineHeight: "1.7",
          textAlign: "center",
        }}
      >
        The Subscription Management System is designed to help users and service
        providers efficiently manage subscription-based products and services.
        Users can subscribe, upgrade, downgrade, or cancel plans seamlessly,
        while administrators can create and manage plans, pricing, and discounts.
        The system also provides insights and recommendations, making it easier
        to optimize subscription usage and pricing strategies.
      </p>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Mission Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: "280px",
          }}
        >
          <h3 style={{ color: "#4b4fff", fontSize: "24px", marginBottom: "12px" }}>
            Our Mission
          </h3>
          <p style={{ color: "#4b4b6b", fontSize: "16px", lineHeight: "1.6" }}>
            To simplify subscription lifecycle management for both individuals and
            service providers by enabling seamless plan operations, smart
            recommendations, and transparency in pricing.
          </p>
        </div>

        {/* Vision Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: "280px",
          }}
        >
          <h3 style={{ color: "#4b4fff", fontSize: "24px", marginBottom: "12px" }}>
            Our Vision
          </h3>
          <p style={{ color: "#4b4b6b", fontSize: "16px", lineHeight: "1.6" }}>
            To become the most trusted platform for managing all subscription services,
            empowering users with control and admins with insights to optimize plans,
            offers, and customer engagement.
          </p>
        </div>

        {/* Core Features Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: "280px",
          }}
        >
          <h3 style={{ color: "#4b4fff", fontSize: "24px", marginBottom: "12px" }}>
            Core Features
          </h3>
          <ul
            style={{
              color: "#4b4b6b",
              textAlign: "left",
              paddingLeft: "18px",
              fontSize: "16px",
              lineHeight: "1.6",
              marginTop: "10px",
            }}
          >
            <li>
              <strong>Plan Management:</strong> Subscribe, renew, upgrade, downgrade, or cancel plans with ease.
            </li>
            <li>
              <strong>Admin Tools:</strong> Create and manage plans, pricing, and promotional discounts.
            </li>
            <li>
              <strong>Analytics & Insights:</strong> Track popular plans, cancellations, and user trends.
            </li>
            <li>
              <strong>Recommendations:</strong> Get AI-powered suggestions for users and pricing optimization.
            </li>
            <li>
              <strong>Notifications:</strong> Stay updated on renewals, offers, and subscription changes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
