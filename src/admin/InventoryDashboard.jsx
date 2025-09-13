import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Package, Folder, Tag, Settings, Bell, 
  BarChart3, Search, Filter, Download, Upload,
  TrendingUp, TrendingDown, ArrowRight
} from 'lucide-react';
import AdminNavbar from './AdminNavbar';

const InventoryDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Stats data
  const stats = [
    {
      title: 'Total Products',
      value: '1,248',
      change: '+24',
      changeType: 'positive',
      icon: <Package size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: 'Low Stock Items',
      value: '36',
      change: '+5',
      changeType: 'negative',
      icon: <Bell size={24} />,
      color: 'bg-amber-500'
    },
    {
      title: 'Categories',
      value: '18',
      change: '+2',
      changeType: 'positive',
      icon: <Folder size={24} />,
      color: 'bg-green-500'
    },
    {
      title: 'Total Value',
      value: '$186,420',
      change: '+$12,380',
      changeType: 'positive',
      icon: <BarChart3 size={24} />,
      color: 'bg-purple-500'
    }
  ];

  // Quick actions
  const quickActions = [
    {
      title: 'Add New Product',
      icon: <Plus size={20} />,
      link: '#add-product',
      color: 'bg-blue-500'
    },
    {
      title: 'Manage Categories',
      icon: <Folder size={20} />,
      link: '#categories',
      color: 'bg-green-500'
    },
    {
      title: 'Stock Adjustment',
      icon: <Settings size={20} />,
      link: '#stock-adjustment',
      color: 'bg-amber-500'
    },
    {
      title: 'Generate Report',
      icon: <Download size={20} />,
      link: '#generate-report',
      color: 'bg-purple-500'
    }
  ];

  // Recent activities
  const activities = [
    {
      action: 'Stock updated',
      item: 'Network Switches',
      time: '10:15 AM',
      user: 'John Doe'
    },
    {
      action: 'New product added',
      item: 'Wireless Keyboard',
      time: '09:45 AM',
      user: 'Jane Smith'
    },
    {
      action: 'Low stock alert',
      item: 'HDMI Cables',
      time: 'Yesterday',
      user: 'System'
    },
    {
      action: 'Category created',
      item: 'Gaming Peripherals',
      time: 'Oct 12',
      user: 'John Doe'
    }
  ];

  // Low stock items
  const lowStockItems = [
    {
      name: 'HDMI Cables',
      sku: 'CAB-HDMI-002',
      stock: 4,
      threshold: 10
    },
    {
      name: 'Wireless Mice',
      sku: 'PER-MSE-015',
      stock: 7,
      threshold: 15
    },
    {
      name: 'Network Switches',
      sku: 'NET-SWH-008',
      stock: 2,
      threshold: 5
    },
    {
      name: 'USB-C Adapters',
      sku: 'CAB-USB-011',
      stock: 3,
      threshold: 8
    }
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f7f9fc" }}>
      {/* Sidebar */}
      <AdminNavbar />
      
      {/* Main Content */}
      <div style={{ marginLeft: "250px", padding: "30px", width: "calc(100% - 250px)" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#2d3748", margin: "0 0 5px 0" }}>
              Inventory Dashboard
            </h1>
            <p style={{ color: "#718096", margin: "0" }}>Welcome back, Admin! Here's what's happening today.</p>
          </div>
          
          <div style={{ display: "flex", gap: "15px" }}>
            <div style={{ 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "8px 15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              width: "250px"
            }}>
              <Search size={18} color="#a0aec0" style={{ marginRight: "10px" }} />
              <input 
                type="text" 
                placeholder="Search products..." 
                style={{ 
                  border: "none", 
                  outline: "none", 
                  width: "100%",
                  fontSize: "14px"
                }}
              />
            </div>
            
            <button style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              backgroundColor: "#4299e1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(66, 153, 225, 0.3)"
            }}>
              <Plus size={18} />
              Add Product
            </button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: "20px", 
          marginBottom: "30px" 
        }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ color: "#718096", margin: "0 0 10px 0", fontSize: "14px" }}>{stat.title}</p>
                  <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 5px 0", color: "#2d3748" }}>
                    {stat.value}
                  </h2>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    fontSize: "14px",
                    color: stat.changeType === 'positive' ? "#38a169" : "#e53e3e"
                  }}>
                    {stat.changeType === 'positive' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span style={{ marginLeft: "5px" }}>{stat.change} this month</span>
                  </div>
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: stat.changeType === 'positive' ? "#ebf8f2" : "#fed7d7",
                  color: stat.changeType === 'positive' ? "#38a169" : "#e53e3e"
                }}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Main Content Area */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "25px" }}>
          {/* Left Column */}
          <div>
            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                marginBottom: "25px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0", color: "#2d3748" }}>Quick Actions</h3>
                <button style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "5px", 
                  color: "#4299e1", 
                  backgroundColor: "transparent", 
                  border: "none", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  cursor: "pointer" 
                }}>
                  View all <ArrowRight size={14} />
                </button>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -5 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      backgroundColor: "#f7fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "15px",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: action.color,
                      color: "white"
                    }}>
                      {action.icon}
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>{action.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Recent Activities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0", color: "#2d3748" }}>Recent Activities</h3>
                <button style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "5px", 
                  color: "#4299e1", 
                  backgroundColor: "transparent", 
                  border: "none", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  cursor: "pointer" 
                }}>
                  View all <ArrowRight size={14} />
                </button>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {activities.map((activity, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    padding: "12px", 
                    borderRadius: "8px",
                    backgroundColor: index === 0 ? "#ebf8f2" : "transparent",
                    border: index === 0 ? "1px solid #c6f6d5" : "1px solid #e2e8f0"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "#edf2f7",
                      marginRight: "12px",
                      flexShrink: 0
                    }}>
                      <Package size={16} color="#4a5568" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: "0 0 3px 0", fontSize: "14px", fontWeight: "600" }}>
                        {activity.action}: <span style={{ color: "#4299e1" }}>{activity.item}</span>
                      </p>
                      <p style={{ margin: "0", fontSize: "12px", color: "#718096" }}>
                        By {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <div>
            {/* Low Stock Alerts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                marginBottom: "25px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0", color: "#2d3748" }}>Low Stock Alerts</h3>
                <span style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#fed7d7",
                  color: "#e53e3e",
                  fontSize: "12px",
                  fontWeight: "700"
                }}>{lowStockItems.length}</span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {lowStockItems.map((item, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    padding: "12px",
                    borderRadius: "8px",
                    backgroundColor: "#fff5f5",
                    border: "1px solid #fed7d7"
                  }}>
                    <div>
                      <p style={{ margin: "0 0 3px 0", fontSize: "14px", fontWeight: "600" }}>{item.name}</p>
                      <p style={{ margin: "0", fontSize: "12px", color: "#718096" }}>{item.sku}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ 
                        margin: "0 0 3px 0", 
                        fontSize: "14px", 
                        fontWeight: "700",
                        color: item.stock < 5 ? "#e53e3e" : "#d69e2e"
                      }}>
                        {item.stock} left
                      </p>
                      <p style={{ margin: "0", fontSize: "12px", color: "#718096" }}>
                        Threshold: {item.threshold}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button style={{
                width: "100%",
                marginTop: "15px",
                padding: "10px",
                backgroundColor: "transparent",
                border: "1px dashed #cbd5e0",
                borderRadius: "8px",
                color: "#718096",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}>
                <Plus size={16} />
                Create Purchase Order
              </button>
            </motion.div>
            
            {/* Quick Reports */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 20px 0", color: "#2d3748" }}>Quick Reports</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  cursor: "pointer"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "#ebf8f2",
                      color: "#38a169"
                    }}>
                      <Download size={16} />
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>Stock Summary</span>
                  </div>
                  <ArrowRight size={16} color="#a0aec0" />
                </button>
                
                <button style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  cursor: "pointer"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "#ebf4ff",
                      color: "#4299e1"
                    }}>
                      <BarChart3 size={16} />
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>Sales Report</span>
                  </div>
                  <ArrowRight size={16} color="#a0aec0" />
                </button>
                
                <button style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  cursor: "pointer"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "#faf5ff",
                      color: "#9f7aea"
                    }}>
                      <Upload size={16} />
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>Export Data</span>
                  </div>
                  <ArrowRight size={16} color="#a0aec0" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;