import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import Dashboard from "./pages/Dashboard";
import "./App.css";
import AboutPage from "./components/AboutPage";
import SignUp from "./components/AdminSignUp";
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

function App() {
  return (
    <Router>
      
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/home" element={<RotaractWebsite />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup/admin" element={<AdminSignUp/>} />
        <Route path="admin/signin" element={<AdminSignin />} />
        <Route path="/admin/home" element={<AdminHome />} />


        <Route path="/" element={<MainDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="overview" element={<DashboardOverview />} />
        <Route path="browse-plans" element={<DashboardBrowsePlans />} />
        <Route path="usage" element={<DashboardUsage />} />
        <Route path="ai-recommendations" element={<DashboardAIRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
