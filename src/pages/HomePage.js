import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import posts from "../data/posts.json"; // Import posts data from the JSON file
import "./HomePage.css";

const HomePage = () => {
  // State for toggle functionality in the About section
  const [showDetails, setShowDetails] = useState(false);

  // Handle the toggle for the About section
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {/* SEO Metadata */}
      <Helmet>
        <title>NC4x Trade Personal Blog</title>
        <meta
          name="description"
          content="NC4x Traders Hub: Your go-to platform for trade insights and inspiration."
        />
        <meta
          name="keywords"
          content="trading, market insights, trading blog, investment, trading tips"
        />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Welcome to NC4x Traders Hub</h2>
          <p>Your go-to platform for trade insights and inspiration.</p>
          <button
            className="start-button"
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Welcome to NC4x Traders Hub, your ultimate destination for insightful
          and inspiring content on global and local trade. Our mission is to
          empower traders, investors, and enthusiasts with the knowledge and
          tools they need to navigate the complex world of trading.
        </p>
        <button onClick={toggleDetails} id="read-more-about">
          {showDetails ? "Read Less" : "Read More"}
        </button>

        {showDetails && (
          <div id="about-details" className="about-details">
            <h3>Our Story</h3>
            <p>
              Founded by a team of passionate traders and market analysts, NC4x
              Trade Personal Blog was born out of a desire to share our collective
              expertise and experiences...
            </p>
            <img src="ourstory.jpg" alt="Our Story" className="about-image" />

            <h3>What We Offer</h3>
            <p>
              <strong>Expert Insights:</strong> Articles and analyses from seasoned traders.
              <br />
              <strong>Educational Resources:</strong> Enhancing trading skills for all levels.
              <br />
              <strong>Community Engagement:</strong> Join discussions and learn from others.
            </p>
            <img src="what-we-offer.jpg" alt="What We Offer" className="about-image" />

            <h3>Our Vision</h3>
            <p>
              At NC4x Traders Hub, we envision creating a dynamic and comprehensive platform...
            </p>
          </div>
        )}
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <h2>Recent Posts</h2>
        <div className="posts" id="postsContainer">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="post-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-image"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <h3 className="post-title">{post.title}</h3>
                <p className="post-preview">{post.preview}</p>
                <Link to={`/post/${post.id}`} className="read-more-link">
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or want to share your story? Reach out to us!</p>
        <Link to="/contact" className="button">
          Email Us
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
