import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserSignin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (location.state?.fromSignUp) {
      setSuccessMsg("Signup Successful! Please login.");
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = savedUsers.find((user) => user.email === email && user.password === password);

    if (userExists) {
      setSuccessMsg("Login Successful!");
      setTimeout(() => navigate("/user"), 1000);
    } else {
      setErrors({ general: "Invalid email or password" });
    }
  };

  return (
    <div style={styles.container}>
      {/* Keep the same UI as your previous SignIn */}
      <div style={styles.leftPanel}>
        <div style={styles.logo}>🌟 SubscriptEase</div>
        <h2 style={styles.welcome}>Welcome Back!</h2>
        <p style={styles.desc}>To stay connected with us please login with your personal info</p>
      </div>

      <div style={styles.rightPanel}>
        <h2 style={styles.loginHeading}>Login</h2>
        {errors.general && <p style={styles.error}>{errors.general}</p>}
        {successMsg && <p style={styles.success}>{successMsg}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input}/>
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input}/>
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <button type="submit" style={styles.button}>LOGIN</button>
        </form>

        <p style={styles.signupText}>
          Don't have an account? <span style={styles.signupLink} onClick={() => navigate("/")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

// Keep the same styles as SignUp for consistency
const styles = { /* same as above */ 
  container: { display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
  leftPanel: { flex: 1, backgroundColor: "#0D3B66", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px" },
  logo: { fontSize: "28px", fontWeight: "700", marginBottom: "30px" },
  welcome: { fontSize: "32px", fontWeight: "600", marginBottom: "15px" },
  desc: { fontSize: "16px", textAlign: "center", maxWidth: "300px", lineHeight: "1.5" },
  rightPanel: { flex: 1, backgroundColor: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px" },
  loginHeading: { fontSize: "28px", fontWeight: "600", marginBottom: "20px", color: "#0D3B66" },
  form: { width: "100%", maxWidth: "300px", display: "flex", flexDirection: "column" },
  input: { padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #0D3B66", fontSize: "15px", outline: "none" },
  button: { padding: "12px", backgroundColor: "#0D3B66", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" },
  error: { color: "#E63946", fontSize: "13px", marginBottom: "10px" },
  success: { color: "#2A9D8F", fontSize: "14px", marginBottom: "10px" },
  signupText: { marginTop: "20px", fontSize: "14px", color: "#555" },
  signupLink: { color: "#0D3B66", fontWeight: "600", cursor: "pointer" },
};

export default UserSignin;