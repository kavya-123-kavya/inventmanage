import React, { useState } from 'react';
import { Bell, Zap, DollarSign, Database, TrendingUp, Lightbulb, BarChart3, Check, Wifi } from 'lucide-react';

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Browse Plans', 'Usage', 'AI Recommendations'];

  // Common header and stats components
  const DashboardHeader = () => (
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
  );

  const WelcomeSection = () => (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">Welcome back, John Doe!</h2>
      <p className="text-gray-600">Manage your subscriptions and explore new plans</p>
    </div>
  );

  const StatsCards = () => (
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
  );

  const NavigationTabs = () => (
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
  );

  // Overview Content
  const OverviewContent = () => (
    <>
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
    </>
  );

  // Browse Plans Content
  const BrowsePlansContent = () => {
    const fiberPlans = [
      {
        name: 'Fiber Starter',
        description: 'Perfect for light browsing and streaming',
        price: 29.99,
        features: ['50 Mbps Speed', '100 GB Data', 'Basic Support', 'No Contract'],
        dataQuota: '100 GB',
        connectionType: 'Fibernet',
        buttonText: 'Subscribe Now',
        buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      {
        name: 'Fiber Pro',
        description: 'Ideal for families and heavy users',
        price: 49.99,
        features: ['200 Mbps Speed', '500 GB Data', 'Priority Support', 'Free Installation'],
        dataQuota: '500 GB',
        connectionType: 'Fibernet',
        buttonText: 'Current Plan',
        buttonStyle: 'bg-purple-200 text-purple-700',
        isCurrentPlan: true,
        popular: true
      },
      {
        name: 'Fiber Enterprise',
        description: 'Ultimate speed for businesses',
        price: 99.99,
        features: ['1 Gbps Speed', 'Unlimited Data', '24/7 Support', 'Static IP', 'SLA Guarantee'],
        dataQuota: 'Unlimited',
        connectionType: 'Fibernet',
        buttonText: 'Subscribe Now',
        buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white'
      }
    ];

    const broadbandPlans = [
      {
        name: 'Broadband Basic',
        description: 'Reliable service broadband connection',
        price: 19.99,
        features: ['25 Mbps Speed', '50 GB Data', 'Email Support'],
        dataQuota: '50 GB',
        connectionType: 'Broadband'
      },
      {
        name: 'Broadband Plus',
        description: 'Enhanced broadband with more data',
        price: 34.99,
        features: ['50 Mbps Speed', '200 GB Data', 'Phone Support', 'Wi-Fi Router Included'],
        dataQuota: '200 GB',
        connectionType: 'Broadband'
      }
    ];

    return (
      <>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Perfect Plan</h2>
          <p className="text-gray-600">Upgrade, downgrade, or switch plans anytime</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {fiberPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg p-6 shadow-sm border relative ${
                plan.isCurrentPlan ? 'border-green-300 border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              {plan.isCurrentPlan && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Current Plan
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-blue-600">
                  ${plan.price}
                  <span className="text-sm text-gray-500 font-normal">/monthly</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Data Quota:</span>
                  <span className="font-medium">{plan.dataQuota}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Connection Type:</span>
                  <span className="font-medium">{plan.connectionType}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}
                disabled={plan.isCurrentPlan}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {broadbandPlans.map((plan, index) => (
            <div key={plan.name} className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wifi className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-blue-600">
                  ${plan.price}
                  <span className="text-sm text-gray-500 font-normal">/monthly</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Data Quota:</span>
                  <span className="font-medium">{plan.dataQuota}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Connection Type:</span>
                  <span className="font-medium">{plan.connectionType}</span>
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };

  // Usage Content
  const UsageContent = () => (
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
  );

  // AI Recommendations Content
  const AIRecommendationsContent = () => (
    <>
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
    </>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewContent />;
      case 'Browse Plans':
        return <BrowsePlansContent />;
      case 'Usage':
        return <UsageContent />;
      case 'AI Recommendations':
        return <AIRecommendationsContent />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        <StatsCards />
        <NavigationTabs />
        {renderContent()}
      </div>
    </div>
  );
};

export default MainDashboard;