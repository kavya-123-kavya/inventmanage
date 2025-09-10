// UserHome.jsx
import React, { useState, useEffect } from 'react';
import UserNavbar from './UserNavbar';
import './UserHome.css';

const UserHome = () => {
  const [inventoryData, setInventoryData] = useState({
    totalItems: 0,
    lowStockItems: 0,
    outOfStockItems: 0,
    categories: 0
  });
  
  const [recentActivity, setRecentActivity] = useState([]);
  const [quickStats, setQuickStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0
  });

  // Simulate data fetching
  useEffect(() => {
    // In a real app, this would be API calls
    const fetchData = () => {
      setInventoryData({
        totalItems: 1247,
        lowStockItems: 23,
        outOfStockItems: 5,
        categories: 18
      });
      
      setRecentActivity([
        { id: 1, action: 'Item added', item: 'Wireless Mouse', user: 'You', time: '2 hours ago' },
        { id: 2, action: 'Stock updated', item: 'Mechanical Keyboard', user: 'Admin', time: '5 hours ago' },
        { id: 3, action: 'Order placed', item: 'Gaming Chair', user: 'Sales Team', time: 'Yesterday' },
        { id: 4, action: 'Category updated', item: 'Computer Accessories', user: 'You', time: '2 days ago' }
      ]);
      
      setQuickStats({
        totalOrders: 47,
        pendingOrders: 12,
        completedOrders: 35
      });
    };
    
    fetchData();
  }, []);

  return (
    <div className="user-home">
      <UserNavbar />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your inventory today.</p>
        </div>
        
        {/* Inventory Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <div className="card-icon total-items">
              <i className="fas fa-boxes"></i>
            </div>
            <div className="card-content">
              <h3>{inventoryData.totalItems}</h3>
              <p>Total Items</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="card-icon low-stock">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="card-content">
              <h3>{inventoryData.lowStockItems}</h3>
              <p>Low Stock Items</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="card-icon out-of-stock">
              <i className="fas fa-times-circle"></i>
            </div>
            <div className="card-content">
              <h3>{inventoryData.outOfStockItems}</h3>
              <p>Out of Stock</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="card-icon categories">
              <i className="fas fa-tags"></i>
            </div>
            <div className="card-content">
              <h3>{inventoryData.categories}</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>
        
        <div className="dashboard-content">
          {/* Recent Activity Section */}
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="activity-details">
                    <p><strong>{activity.action}</strong>: {activity.item}</p>
                    <span>By {activity.user} • {activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Stats Section */}
          <div className="quick-stats">
            <h2>Order Overview</h2>
            <div className="stats-card">
              <div className="stat">
                <h3>{quickStats.totalOrders}</h3>
                <p>Total Orders</p>
              </div>
              <div className="stat">
                <h3>{quickStats.pendingOrders}</h3>
                <p>Pending Orders</p>
              </div>
              <div className="stat">
                <h3>{quickStats.completedOrders}</h3>
                <p>Completed Orders</p>
              </div>
            </div>
            
            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button className="action-btn">
                  <i className="fas fa-plus-circle"></i>
                  Add New Item
                </button>
                <button className="action-btn">
                  <i className="fas fa-shopping-cart"></i>
                  Create Order
                </button>
                <button className="action-btn">
                  <i className="fas fa-file-export"></i>
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;