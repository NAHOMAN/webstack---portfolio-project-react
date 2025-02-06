// src/pages/SignIn.js
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
