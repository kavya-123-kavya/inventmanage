import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Users, Activity, DollarSign, AlertTriangle, TrendingUp, Settings, Bell, User } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data
  const revenueData = [
    { month: 'Jan', revenue: 35000 },
    { month: 'Feb', revenue: 42000 },
    { month: 'Mar', revenue: 38000 },
    { month: 'Apr', revenue: 45000 },
    { month: 'May', revenue: 48750 },
  ];

  const growthData = [
    { month: 'Jan', new: 85, cancelled: 15 },
    { month: 'Feb', new: 120, cancelled: 25 },
    { month: 'Mar', new: 95, cancelled: 18 },
    { month: 'Apr', new: 140, cancelled: 30 },
    { month: 'May', new: 165, cancelled: 22 },
  ];

  const plans = [
    {
      id: 1,
      name: 'Fiber Starter',
      description: 'Perfect for light browsing and streaming',
      price: 29.99,
      speed: '50 Mbps Speed',
      data: '100 GB Data',
      features: ['Basic Support', 'No Contract'],
      dataQuota: '100 GB',
      connectionType: 'Fibernet',
      icon: '⚡',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 2,
      name: 'Fiber Pro',
      description: 'Ideal for families and heavy users',
      price: 49.99,
      speed: '200 Mbps Speed',
      data: '500 GB Data',
      features: ['Priority Support', 'Free Installation'],
      dataQuota: '500 GB',
      connectionType: 'Fibernet',
      icon: '⚡',
      color: 'bg-blue-100 text-blue-600',
      popular: true
    },
    {
      id: 3,
      name: 'Fiber Enterprise',
      description: 'Ultimate speed for businesses',
      price: 99.99,
      speed: '1 Gbps Speed',
      data: 'Unlimited Data',
      features: ['24/7 Support', 'Static IP', 'SLA Guarantee'],
      dataQuota: 'Unlimited',
      connectionType: 'Fibernet',
      icon: '⚡',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 4,
      name: 'Broadband Basic',
      description: 'Reliable copper broadband connection',
      price: 19.99,
      speed: '25 Mbps Speed',
      data: '50 GB Data',
      features: ['Email Support'],
      dataQuota: '50 GB',
      connectionType: 'Broadband',
      icon: '📡',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 5,
      name: 'Broadband Plus',
      description: 'Enhanced broadband with more data',
      price: 34.99,
      speed: '50 Mbps Speed',
      data: '200 GB Data',
      features: ['Phone Support', 'Wi-Fi Router Included'],
      dataQuota: '200 GB',
      connectionType: 'Broadband',
      icon: '📡',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const StatCard = ({ title, value, change, icon: Icon, subtitle }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-gray-500 text-xs">{subtitle}</p>
          <p className="text-green-600 text-xs mt-1">{change}</p>
        </div>
        <Icon className="h-8 w-8 text-gray-400" />
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Subscriptions"
          value="1,250"
          subtitle="All time subscriptions"
          change="+12.5% from last month"
          icon={Users}
        />
        <StatCard
          title="Active Subscriptions"
          value="987"
          subtitle="Currently active"
          change="+12.5% from last month"
          icon={Activity}
        />
        <StatCard
          title="Monthly Revenue"
          value="$48,750"
          subtitle="Current month"
          change="+8.2% from last month"
          icon={DollarSign}
        />
        <StatCard
          title="Churn Rate"
          value="5.2%"
          subtitle="Monthly churn"
          change="+1.2% from last month"
          icon={AlertTriangle}
        />
      </div>

      {/* AI Insights */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 mr-2" />
          <h3 className="text-lg font-semibold">AI-Powered Business Insights</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">Strategic recommendations to optimize your business</p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Recommended: Create Mid-Tier Fiber Plan</h4>
            <p className="text-blue-800 text-sm mb-3">
              Analysis shows a gap between Fiber Pro ($49.99) and Fiber Enterprise ($99.99). A $74.99 plan could capture 15% more market share.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
              Create Plan
            </button>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-900 mb-2">Attention: High Churn in Broadband Basic</h4>
            <p className="text-yellow-800 text-sm mb-3">
              Broadband Basic has 12% monthly churn. Consider adding more value or adjusting pricing.
            </p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700">
              View Details
            </button>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Opportunity: Upsell Campaign</h4>
            <p className="text-green-800 text-sm mb-3">
              234 Fiber Starter users are using >80% of their data. Target them for Fiber Pro upgrades.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
              Launch Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AnalyticsView = () => (
    <div className="space-y-6">
      {/* Most Popular Plans */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">📊 Most Popular Plans</h3>
        <p className="text-gray-600 text-sm mb-6">Top performing subscription plans this month</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm mr-3">#1</span>
              <span className="font-medium">Fiber Pro</span>
              <p className="text-sm text-gray-600 mt-1">456 active subscriptions</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">46.2%</p>
              <p className="text-sm text-gray-600">of total</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="bg-gray-600 text-white px-2 py-1 rounded text-sm mr-3">#2</span>
              <span className="font-medium">Fiber Starter</span>
              <p className="text-sm text-gray-600 mt-1">234 active subscriptions</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">23.7%</p>
              <p className="text-sm text-gray-600">of total</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm mr-3">#3</span>
              <span className="font-medium">Broadband Plus</span>
              <p className="text-sm text-gray-600 mt-1">189 active subscriptions</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">19.1%</p>
              <p className="text-sm text-gray-600">of total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
          <p className="text-gray-600 text-sm mb-4">Monthly revenue over time</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Subscription Growth</h3>
          <p className="text-gray-600 text-sm mb-4">New vs. cancelled subscriptions</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="new" fill="#10b981" name="New" />
              <Bar dataKey="cancelled" fill="#ef4444" name="Cancelled" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const ManagePlansView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Manage Subscription Plans</h2>
          <p className="text-gray-600">Create, edit, and optimize your subscription offerings</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          + Create New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-white border rounded-lg p-6 relative ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
            )}
            
            <div className="text-center mb-4">
              <div className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center text-xl mx-auto mb-3`}>
                {plan.icon}
              </div>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </div>

            <div className="text-center mb-6">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/monthly</span>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-green-600">
                <span className="mr-2">✓</span> {plan.speed}
              </div>
              <div className="flex items-center text-sm text-green-600">
                <span className="mr-2">✓</span> {plan.data}
              </div>
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-green-600">
                  <span className="mr-2">✓</span> {feature}
                </div>
              ))}
            </div>

            <div className="border-t pt-4 text-sm text-gray-600">
              <div className="flex justify-between mb-1">
                <span>Data Quota:</span>
                <span className="font-medium">{plan.dataQuota}</span>
              </div>
              <div className="flex justify-between">
                <span>Connection Type:</span>
                <span className="font-medium">{plan.connectionType}</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200">
                <Settings className="w-4 h-4 inline mr-1" />
                Edit
              </button>
              <button className="px-3 py-2 text-gray-500 hover:text-red-500">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const UserManagementView = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <p className="text-gray-600 mb-6">View and manage subscriber accounts</p>
      
      <div className="text-center py-20 text-gray-500">
        <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>User management interface would be implemented here</p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Analytics', component: DashboardView },
    { id: 'plans', label: 'Manage Plans', component: ManagePlansView },
    { id: 'users', label: 'User Management', component: UserManagementView },
    { id: 'insights', label: 'AI Insights', component: AnalyticsView },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || DashboardView;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-xl font-semibold text-blue-600">Admin Dashboard</h1>
              <p className="text-gray-600 text-sm">Manage your subscriptions</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">Admin Dashboard</h1>
          <p className="text-center text-gray-600">Manage plans, view analytics, and optimize your offerings</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-gray-100 p-1 rounded-lg mb-8 inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active View */}
        <ActiveComponent />
      </div>
    </div>
  );
};

export default AdminDashboard;