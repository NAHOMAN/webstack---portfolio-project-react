import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div>
      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="container">
          <h2>Recent Posts</h2>
          <div className="posts">
            <p>Blog posts will be dynamically injected here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
