import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import Dashboard from "./pages/Dashboard";
import "./App.css";
import AboutPage from "./components/AboutPage";
import AdminSignUp from "./components/AdminSignUp";
import AdminSignin from "./components/AdminSignIn";
import AdminHome from "./admin/AdminHome";

import RotaractWebsite from "./Home";
import DashboardAIRecommendations from "./pages/airecomendations";
import DashboardOverview from "./pages/overview";
import DashboardBrowsePlans from "./pages/browseplans";
import DashboardUsage from "./pages/usage";
import MainDashboard from "./pages/dashboard";
import AdminDashboard from "./admin/AdminHome";

import UserSignup from "./pages/UserSignup";
import UserSignin from "./pages/UserSignin";
import UserNavbar from "./user/UserNavbar";
import UserHome from "./user/UserHome";
import InventoryDashboard from "./admin/InventoryDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing and General Pages */}
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/home" element={<RotaractWebsite />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Admin Routes */}
        <Route path="/signup/admin" element={<AdminSignUp />} />
        <Route path="/admin/signin" element={<AdminSignin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/inventory" element={<InventoryDashboard />} />

        {/* Dashboards (Jashwanth branch) */}
        <Route path="/user" element={<MainDashboard />} />
        <Route path="/overview" element={<DashboardOverview />} />
        <Route path="/browse-plans" element={<DashboardBrowsePlans />} />
        <Route path="/usage" element={<DashboardUsage />} />
        <Route path="/ai-recommendations" element={<DashboardAIRecommendations />} />

        {/* User Routes (master branch) */}
        <Route path="/" element={<UserSignup />} />
        <Route path="/user/signin" element={<UserSignin />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;
