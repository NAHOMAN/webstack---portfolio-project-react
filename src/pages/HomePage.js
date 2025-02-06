import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import posts from "../data/posts.json";  // Import posts data from the JSON file
import "./HomePage.css";

const HomePage = () => {
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
          <button className="start-button">Get Started</button>
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
        <button id="read-more-about">Read More</button>

        <div id="about-details" className="hidden-details">
          <h3>Our Story</h3>
          <p>
            Founded by a team of passionate traders and market analysts, NC4x
            Trade Personal Blog was born out of a desire to share our collective
            expertise and experiences...
          </p>
          <img src="/images/our-story.jpg" alt="Our Story" className="about-image" />

          <h3>What We Offer</h3>
          <ul>
            <li>
              <strong>Expert Insights:</strong> Our blog features articles and
              analyses from seasoned traders and market experts, providing
              valuable insights into market trends and trading strategies.
            </li>
            <li>
              <strong>Educational Resources:</strong> Whether you're a beginner
              or an experienced trader, our resources help you enhance your
              trading skills.
            </li>
            <li>
              <strong>Community Engagement:</strong> Join discussions, share
              experiences, and learn from others.
            </li>
          </ul>
          <img src="/images/what-we-offer.jpg" alt="What We Offer" className="about-image" />

          <h3>Our Vision</h3>
          <p>
            At NC4x Traders Hub, we envision creating a dynamic and
            comprehensive platform that bridges the gap between experienced
            traders and those just starting their trading journey...
          </p>
        </div>
        <button id="read-less-about">Read Less</button>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <h2>Recent Posts</h2>
        <div className="posts" id="postsContainer">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.image} alt={post.title} className="post-image" />
                <h3 className="post-title">{post.title}</h3>
                <p className="post-preview">{post.preview}</p>
                <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
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
