import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage(""); // Reset success message on every attempt
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Sign-up successful! Redirecting to Sign In...");

      // Redirect to Sign In page after a short delay
      setTimeout(() => {
        navigate("/signin"); // Redirect to sign-in page
      }, 2000); // 2-second delay
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
