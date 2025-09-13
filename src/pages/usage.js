import React, { useState } from 'react';
import { Bell, Zap, DollarSign, Database, TrendingUp, BarChart3 } from 'lucide-react';

const DashboardUsage = () => {
  const [activeTab, setActiveTab] = useState('Usage');

  const tabs = ['Overview', 'Browse Plans', 'Usage', 'AI Recommendations'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-blue-600">My Dashboard</h1>
              <p className="text-sm text-gray-500">Manage your subscriptions</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-400" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</span>
              </div>
              <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-medium">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Welcome back, John Doe!</h2>
          <p className="text-gray-600">Manage your subscriptions and explore new plans</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Plan</p>
                <h3 className="text-xl font-bold text-blue-600">Fiber Pro</h3>
                <p className="text-sm text-gray-400">Active subscription</p>
              </div>
              <Zap className="h-8 w-8 text-gray-300" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Monthly Cost</p>
                <h3 className="text-xl font-bold text-blue-600">$49.99</h3>
                <p className="text-sm text-gray-400">Next billing on Sept 1</p>
              </div>
              <DollarSign className="h-8 w-8 text-gray-300" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Data Usage</p>
                <h3 className="text-xl font-bold text-blue-600">245 GB</h3>
                <p className="text-sm text-gray-400">of 500 GB</p>
              </div>
              <Database className="h-8 w-8 text-gray-300" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Savings Opportunity</p>
                <h3 className="text-xl font-bold text-blue-600">15%</h3>
                <p className="text-sm text-green-500">+15% from last month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg mb-6">
          <div className="border-b">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Detailed Usage Analytics */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Detailed Usage Analytics</h3>
          </div>
          <p className="text-gray-600 text-sm mb-8">Your data consumption patterns and trends</p>
          
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-sm">Usage analytics chart would be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsage;