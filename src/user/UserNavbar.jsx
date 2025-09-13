// UserNavbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const UserNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    if (isDropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <i className="fas fa-boxes"></i>
          <span>InventManage</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <div 
            className="navbar-item"
            onMouseEnter={() => toggleDropdown('dashboard')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
            {isDropdownOpen === 'dashboard' && (
              <div className="dropdown-menu">
                <a href="#"><i className="fas fa-chart-line"></i> Overview</a>
                <a href="#"><i className="fas fa-bell"></i> Alerts</a>
                <a href="#"><i className="fas fa-history"></i> Recent Activity</a>
              </div>
            )}
          </div>

          <div 
            className="navbar-item"
            onMouseEnter={() => toggleDropdown('inventory')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <i className="fas fa-box"></i>
            <span>Inventory</span>
            {isDropdownOpen === 'inventory' && (
              <div className="dropdown-menu">
                <a href="#"><i className="fas fa-list"></i> All Items</a>
                <a href="#"><i className="fas fa-plus-circle"></i> Add New Item</a>
                <a href="#"><i className="fas fa-boxes"></i> Categories</a>
                <a href="#"><i className="fas fa-tags"></i> Manage SKUs</a>
              </div>
            )}
          </div>

          <div 
            className="navbar-item"
            onMouseEnter={() => toggleDropdown('orders')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Orders</span>
            {isDropdownOpen === 'orders' && (
              <div className="dropdown-menu">
                <a href="#"><i className="fas fa-list-alt"></i> View Orders</a>
                <a href="#"><i className="fas fa-plus-square"></i> Create Order</a>
                <a href="#"><i className="fas fa-truck-loading"></i> Receive Orders</a>
              </div>
            )}
          </div>

          <div 
            className="navbar-item"
            onMouseEnter={() => toggleDropdown('reports')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <i className="fas fa-chart-bar"></i>
            <span>Reports</span>
            {isDropdownOpen === 'reports' && (
              <div className="dropdown-menu">
                <a href="#"><i className="fas fa-chart-line"></i> Sales Reports</a>
                <a href="#"><i className="fas fa-cubes"></i> Inventory Reports</a>
                <a href="#"><i className="fas fa-file-export"></i> Export Data</a>
              </div>
            )}
          </div>
        </div>

        {/* User Section */}
        <div className="navbar-user">
          <div className="notifications">
            <i className="fas fa-bell"></i>
            <span className="notification-badge">3</span>
          </div>
          
          <div className="user-profile">
            <div className="user-avatar">
              <span>U</span>
            </div>
            <div className="user-info">
              <span className="user-name">User</span>
              <span className="user-role">Inventory User</span>
            </div>
          </div>
          
          <div className="mobile-toggle" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#"><i className="fas fa-home"></i> Dashboard</a>
          <a href="#"><i className="fas fa-box"></i> Inventory</a>
          <a href="#"><i className="fas fa-shopping-cart"></i> Orders</a>
          <a href="#"><i className="fas fa-chart-bar"></i> Reports</a>
          <div className="mobile-user-info">
            <div className="user-avatar">
              <span>U</span>
            </div>
            <div>
              <div className="user-name">User</div>
              <div className="user-role">Inventory User</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;