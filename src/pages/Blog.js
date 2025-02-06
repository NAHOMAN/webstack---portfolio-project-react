import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json"; // Import posts data from the JSON file
import "./Blog.css";

function Blog() {
  return (
    <div>
      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="container">
          <h2>Recent Posts</h2>
          <div className="posts">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="post-card">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image"
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
        </div>
      </section>
    </div>
  );
}

export default Blog;
