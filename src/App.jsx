import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import AboutPage from "./components/AboutPage";
import SignUp from "./components/AdminSignUp";
import AdminSignUp from "./components/AdminSignUp";
import AdminSignin from "./components/AdminSignIn";
import AdminHome from "./admin/AdminHome";
import UserSignup from "./components/UserSignup";
import UserSignin from "./components/UserSignin";
import UserNavbar from "./user/UserNavbar";
import UserHome from "./user/UserHome";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup/admin" element={<AdminSignUp/>} />
        <Route path="admin/signin" element={<AdminSignin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/user/signin" element={<UserSignin />} />
        <Route path="/userhome" element={<UserHome />} />

        
      </Routes>
    </Router>
  );
}

export default App;
