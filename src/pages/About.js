import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <section id="about" className="about">
          <h2 className="text-3xl font-semibold mb-4">About NC4x Traders Hub</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the NC4x trading Hub, where knowledge meets inspiration.
            This platform is dedicated to sharing valuable insights and practical advice about trading, personal development, and the global marketplace.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded with the vision to empower individuals, we believe that informed decisions can transform lives.
            Through engaging content, expert tips, and thoughtful commentary, we aim to inspire our readers and create a thriving community of learners and traders.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a seasoned trader or just starting your journey, NC4x Traders Hub is here to guide you every step of the way.
          </p>
        </section>

        {/* Team Section */}
        <section id="team" className="team my-8">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src="/images/Nahom.jpg" width="100" height="100" alt="Nahom" className="rounded-full mb-2" />
              <h3 className="text-xl font-bold">Nahom Nigussie</h3>
              <p className="text-gray-700">Founder & Lead Blogger</p>
              <p className="text-gray-600">Nahom is passionate about trading and dedicated to sharing his years of experience with others.</p>
            </article>
            <article className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src="/images/Nahom.jpg" width="100" height="100" alt="Nahom" className="rounded-full mb-2" />
              <h3 className="text-xl font-bold">Mr Nahom</h3>
              <p className="text-gray-700">Content Strategist</p>
              <p className="text-gray-600">Mr Nahom ensures that every piece of content aligns with the blog's mission to inform and inspire.</p>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact my-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">Have questions or want to share your story? Reach out to us!</p>
          <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Email Us</Link>
        </section>
      </main>

    </div>
  );
};

export default About;
