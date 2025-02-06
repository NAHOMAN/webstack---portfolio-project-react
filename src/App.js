import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import Dashboard from "./pages/Dashboard"; // Adjust the path if needed
import SignIn from "./pages/SignIn";  // Import SignIn
import SignUp from "./pages/SignUp";  // Import SignUp
import NotFound from "./pages/NotFound"; // Import NotFound page

const App = () => {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignIn />} />  {/* Sign In Route */}
        <Route path="/signup" element={<SignUp />} />  {/* Sign Up Route */}
        <Route path="*" element={<NotFound />} />  {/* Handle 404 pages */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
