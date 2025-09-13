import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = savedUsers.find((user) => user.email === email);

      if (userExists) {
        setErrors({ general: "User already exists" });
      } else {
        savedUsers.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(savedUsers));
        setSuccessMsg("Signup Successful! Redirecting to Login...");
        // Redirect to SignIn after signup
        setTimeout(() => {
          navigate("/user/signin", { state: { fromSignUp: true } });
        }, 1500);
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Keep your existing UI here */}
      <div style={styles.leftPanel}>
        <div style={styles.logo}>🌟 SubscriptEase</div>
        <h2 style={styles.welcome}>Join Us!</h2>
        <p style={styles.desc}>Create your account to manage all your subscriptions easily</p>
      </div>

      <div style={styles.rightPanel}>
        <h2 style={styles.loginHeading}>Sign Up</h2>
        {errors.general && <p style={styles.error}>{errors.general}</p>}
        {successMsg && <p style={styles.success}>{successMsg}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input}/>
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input}/>
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input}/>
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <button type="submit" style={styles.button}>SIGN UP</button>
        </form>

        <p style={styles.signupText}>
          Already have an account? <span style={styles.signupLink} onClick={() => navigate("/user/signin")}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

// Use your existing styles object (same as previous SignUp UI)
const styles = {
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

export default UserSignup;
