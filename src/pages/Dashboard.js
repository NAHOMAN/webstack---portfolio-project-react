import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase authentication
import { updateProfile } from "firebase/auth";
import "./Dashboard.css"; // Import styles

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch user details on component mount
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
    } else {
      navigate("/signin"); // Redirect to Sign In if user not logged in
    }
  }, [navigate]);

  // Handle profile update
  const handleProfileUpdate = async () => {
    if (!user) return;

    try {
      await updateProfile(user, { displayName: name, photoURL });
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/signin"); // Redirect to sign-in page
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="dashboard">
    
          <ul>
            <li><button onClick={handleLogout} className="logout-btn">Log Out</button></li>
          </ul>

      {/* Dashboard Intro */}
      <section className="dashboard-intro">
        <h2>Welcome to Your Dashboard</h2>
        <p>Manage your profile, explore your posts, and continue your trading journey.</p>
      </section>

      {/* User Information */}
      <section className="user-info">
        <h2>User Information</h2>
        {user ? (
          <div className="user-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.displayName || "Not Set"}</p>
            <p><strong>UID:</strong> {user.uid}</p>
            <img src={user.photoURL || "/images/default-user.png"} alt="User" className="user-photo" />
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </section>

      {/* Update Profile Section */}
      <section className="update-profile">
        <h3>Update Profile</h3>
        <label>Update Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter new name" />

        <label>Update Photo URL:</label>
        <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} placeholder="Enter new photo URL" />

        <button onClick={handleProfileUpdate}>Update Profile</button>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>

      {/* Create Post Section */}
      <section className="create-post">
        <h2>Create a Post</h2>
        <form>
          <label>Post Title:</label>
          <input type="text" required />

          <label>Post Content:</label>
          <textarea required></textarea>

          <button type="submit">Submit Post</button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or want to share your story? Reach out to us!</p>
        <a href="/contact" className="contact-button">Email Us</a>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Dashboard;
