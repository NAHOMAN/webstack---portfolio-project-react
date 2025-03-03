import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "#0066cc", textDecoration: "none", fontSize: "18px" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
