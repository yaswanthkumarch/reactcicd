import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      {/* <header className="header">
        <div className="header-content">
          <h1>CompanyName</h1>
          <p>Providing Excellence in Web Solutions</p>
        </div>
      </header> */}

      <Navbar />
      <div className="content">
        {/* Home Section */}
        <section id="home">
          <div className="home-content">
            <h1>Welcome to Our Website</h1>
            <p>
              We are glad to have you here! Our mission is to provide the best services to our clients
              with a focus on quality and customer satisfaction. Explore our website to know more about
              our services and how we can help you.
            </p>
            <button className="cta-btn">Learn More</button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              We are a leading company specializing in web development, digital marketing, and IT consulting.
              Our team of experts is committed to delivering high-quality solutions that help businesses grow and succeed.
            </p>
            <p>
              With years of experience in the industry, we have worked with numerous clients from various sectors,
              ensuring that their unique needs are met with precision and innovation.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="services-content">
            <h2>Our Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Web Development</h3>
                <p>
                  We create modern, responsive websites that offer an exceptional user experience. From design to
                  development, we have you covered.
                </p>
              </div>
              <div className="service-item">
                <h3>SEO Services</h3>
                <p>
                  Our SEO experts will help improve your website's ranking on search engines, driving more traffic
                  and increasing visibility for your business.
                </p>
              </div>
              <div className="service-item">
                <h3>Digital Marketing</h3>
                <p>
                  Our digital marketing services will help you build your brand, engage with your audience, and
                  increase sales through targeted campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact">
          <div className="contact-content">
            <h2>Contact Us</h2>
            <p>
              We would love to hear from you! Whether you have questions about our services or want to get started
              on a project, feel free to reach out.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit" className="cta-btn">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
