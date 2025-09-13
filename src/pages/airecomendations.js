import React, { useState } from 'react';
import { Bell, Zap, DollarSign, Database, TrendingUp, Wifi, BarChart3 } from 'lucide-react';

const DashboardAIRecommendations = () => {
  const [activeTab, setActiveTab] = useState('AI Recommendations');

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

        {/* Current Subscription */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <div className="flex items-center mb-4">
            <Wifi className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Current Subscription</h3>
          </div>
          <p className="text-gray-600 text-sm mb-6">Your active subscription details</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Fiber Pro</h4>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">active</span>
              </div>
              <p className="text-sm text-gray-600">Ideal for families and heavy users</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Monthly Cost</p>
              <p className="text-lg font-semibold text-gray-900">$49.99</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Next Billing</p>
              <p className="text-lg font-semibold text-gray-900">Sept 1, 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Auto Renew</p>
              <p className="text-lg font-semibold text-gray-900">Enabled</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Upgrade Plan
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Manage Subscription
            </button>
          </div>
        </div>

        {/* Data Usage This Month */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Data Usage This Month</h3>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Used: 245 GB</span>
            <span className="text-sm text-gray-600">Remaining: 255 GB</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '49%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAIRecommendations;