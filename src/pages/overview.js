import React, { useState } from 'react';
import { Bell, Zap, DollarSign, Database, TrendingUp, Lightbulb } from 'lucide-react';

const DashboardOverview = () => {
  const [activeTab, setActiveTab] = useState('Overview');

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

        {/* AI-Powered Recommendations */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-5 w-5 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Recommendations</h3>
          </div>
          <p className="text-gray-600 text-sm mb-6">Personalized suggestions based on your usage patterns</p>
          
          <div className="mb-6">
            <h4 className="font-medium text-blue-600 mb-2">Recommended: Upgrade to Fiber Enterprise</h4>
            <p className="text-gray-600 text-sm mb-4">
              Based on your high data usage (245 GB this month), upgrading would provide unlimited data and faster speeds.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Upgrade Now
            </button>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-600 mb-2">Save 20% with Annual Billing</h4>
            <p className="text-gray-600 text-sm mb-3">
              Switch to annual billing and save $119.88 per year on your current plan.
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded border border-blue-200 hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;